import React from 'react';
import './Layout.scss';
import Header from './header/Header';
import Body from './body/Body';

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
