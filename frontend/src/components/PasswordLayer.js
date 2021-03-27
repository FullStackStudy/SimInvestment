import React from 'react';
import './scss/PasswordLayer.scss';

function PasswordLayer() {
    return (
        <div className="PasswordLayer">
            <ul>
                <li status="success">성공했습니다.</li>
                <li>실패입니다.</li>
                <li>실패입니다.</li>
                <li status="success">성공했습니다.</li>
                <li>실패입니다.</li>
            </ul>
        </div>
    );
}

export default PasswordLayer;
