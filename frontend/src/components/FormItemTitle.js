import React from 'react';
import './scss/FormItemTitle.scss';

function FormItemTitle({ children, required }) {
    return (
        <h4 className="FormItemTitle">
            {children}
            <span>{required ? ' *' : ''}</span>
        </h4>
    );
}

export default FormItemTitle;
