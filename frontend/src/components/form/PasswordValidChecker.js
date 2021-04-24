import React from 'react';
import './PasswordValidChecker.scss';
import Context from '../../Context';

// 비밀번호 유효성 검사
export const confirmPassword = (code, pw) => {
    if (!pw) pw = '';

    const minPwLength = Context.Password.MIN_LENGTH;
    const maxPwLength = Context.Password.MAX_LENGTH;
    const pwLength = pw.length;

    const upper = pw.search(/[A-Z]/g) + 1;
    const lower = pw.search(/[a-z]/g) + 1;
    const special = pw.search(/[`~!@#$%^&*|\\\'\";:\/?]/g) + 1;
    const number = pw.search(/[0-9]/g) + 1;

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
            if (pw && !/(\w)\1\1/.test(pw)) success = 'success';
            break;
    }

    return success;
};

function PasswordValidChecker({ display, password }) {
    const minPwLength = Context.Password.MIN_LENGTH;
    const maxPwLength = Context.Password.MAX_LENGTH;

    return (
        <div className="PasswordValidChecker" display={display}>
            <ul>
                <li status={confirmPassword(0, password)}>
                    {minPwLength}자 이상 {maxPwLength}자 이하
                </li>
                <li status={confirmPassword(1, password)}>영어 대문자, 소문자, 숫자, 특수문자 3종 조합</li>
                <li status={confirmPassword(2, password)}>같은 문자(숫자) 3자리 이상 반복 금지</li>
            </ul>
        </div>
    );
}

export default PasswordValidChecker;
