import React from 'react';
import './Button.scss';

function Button({ children, onClick, color, size, type, wide }) {
    // 여려 props를 클래스로 만들어주는 함수
    const getClassName = (...props) => {
        let className = 'Button';
        for (const prop of props) {
            className = className.concat(` ${prop}`);
        }
        return className;
    };

    return (
        <button className={getClassName(color, size, wide ? 'wide' : '')} onClick={onClick} type={type}>
            {children}
        </button>
    );
}

export default Button;
