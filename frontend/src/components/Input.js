import React from 'react';
import './scss/Input.scss';

// wide: true / false
function Input({ type, placeholder, onChange, size, wide }) {
    // 여려 props를 클래스로 만들어주는 함수
    const getClassName = (...props) => {
        let className = 'Input';

        for (const prop of props) {
            className = className.concat(` ${prop}`);
        }
        return className;
    };

    return (
        <input
            className={getClassName(size, wide ? 'wide' : '')}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default Input;
