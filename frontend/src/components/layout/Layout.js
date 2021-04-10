import React from 'react';
import './scss/Layout.scss';
import Header from './Header';
import Body from './Body';

function Layout({ children }) {
    return (
        <div className="Layout">
            <Header />
            <Body>{children}</Body>
            {/*Footer는 필요하면 추가할 예정*/}
            {/*<Footer />*/}
        </div>
    );
}

export default Layout;
