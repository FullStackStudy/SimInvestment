import React from 'react';
import './PasswordChecker.scss';

function PasswordChecker({ password, passwordConfirm }) {
    const isCorrect = password === passwordConfirm ? 'true' : '';
    const display = password && passwordConfirm ? 'true' : 'false';

    return (
        <span className="PasswordChecker" correct={isCorrect} display={display}>
            {isCorrect ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
        </span>
    );
}

export default PasswordChecker;
