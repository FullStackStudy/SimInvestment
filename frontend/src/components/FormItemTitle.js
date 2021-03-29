import React from 'react';
import './scss/FormItemTitle.scss';

function FormItemTitle({ children, required }) {
    return (
        <span className="FormItemTitle">
            {children}
            <span>{required ? ' *' : ''}</span>
        </span>
    );
}

export default FormItemTitle;
