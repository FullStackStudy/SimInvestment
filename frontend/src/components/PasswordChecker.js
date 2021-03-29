import React from 'react';
import './scss/PasswordChecker.scss';

function PasswordChecker({ pw, pwConfirm }) {
    const isCorrect = pw === pwConfirm ? 'true' : '';
    const display = pw && pwConfirm ? 'true' : 'false';

    return (
        <span className="PasswordChecker" correct={isCorrect} display={display}>
            {isCorrect ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
        </span>
    );
}

export default PasswordChecker;
