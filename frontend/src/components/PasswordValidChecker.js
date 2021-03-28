import React from 'react';
import './scss/PasswordValidChecker.scss';
import Context from '../Context';

function PasswordValidChecker({ display, password }) {
    const minPwLength = Context.Password.MIN_PW_LENGTH;
    const maxPwLength = Context.Password.MAX_PW_LENGTH;

    // 비밀번호 유효성 검사
    const confirmPw = (code) => {
        if (!password) password = '';

        const pwLength = password.length;

        const upper = password.search(/[A-Z]/g) + 1;
        const lower = password.search(/[a-z]/g) + 1;
        const special = password.search(/[`~!@#$%^&*|\\\'\";:\/?]/g) + 1;
        const number = password.search(/[0-9]/g) + 1;

        let success = 'fail';
        switch (code) {
            //  {minPwLength}자 이상 {maxPwLength}자 이하
            case 0:
                if (minPwLength <= pwLength && pwLength <= maxPwLength) success = 'success';
                break;

            // 영어 대문자, 소문자, 숫자, 특수문자 3종 조합
            case 1:
                if (
                    (upper && lower && special) ||
                    (upper && lower && number) ||
                    (upper && special && number) ||
                    (lower && special && number)
                )
                    success = 'success';
                break;

            // 같은 문자(숫자) 3자리 이상 반복 금지
            case 2:
                if (password && !/(\w)\1\1/.test(password)) success = 'success';
                break;
        }

        return success;
    };

    return (
        <div className="PasswordValidChecker" display={display}>
            <ul>
                <li status={confirmPw(0)}>
                    {minPwLength}자 이상 {maxPwLength}자 이하
                </li>
                <li status={confirmPw(1)}>영어 대문자, 소문자, 숫자, 특수문자 3종 조합</li>
                <li status={confirmPw(2)}>같은 문자(숫자) 3자리 이상 반복 금지</li>
            </ul>
        </div>
    );
}

export default PasswordValidChecker;
