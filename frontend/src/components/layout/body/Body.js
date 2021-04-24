import React from 'react';
import './Body.scss';
import SideBar from './SideBar';

function Body({ children }) {
    return (
        <div className="Body">
            <SideBar />
            <div className="container">{children}</div>
        </div>
    );
}

export default Body;
