import React from 'react';
import './Input.scss';

// wide: true / false
function Input({ type, placeholder, onChange, size, wide, name, onSelect, onBlur, maxLength, required }) {
    // 여려 props를 클래스로 만들어주는 함수
    const getClassName = (...props) => {
        let className = 'Input';

        for (const prop of props) {
            className = className.concat(` ${prop}`);
        }
        return className;
    };

    //const pattern = type === 'tel' ? '[0-9]{3}-[0-9]{4}-[0-9]{4}' : '';

    return (
        <input
            className={getClassName(size, wide ? 'wide' : '')}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            onSelect={onSelect}
            onBlur={onBlur}
            maxLength={maxLength ? maxLength : 80}
            required={required}
        />
    );
}

export default Input;
