import React from 'react';
import './scss/LayoutMenu.scss';

function LayoutMenu({ children, imgSrc }) {
    return (
        <div className="LayoutMenu">
            <img src={imgSrc ? imgSrc : '#'} width="20" height="20" />
            <p>{children}</p>
        </div>
    );
}

export default LayoutMenu;
