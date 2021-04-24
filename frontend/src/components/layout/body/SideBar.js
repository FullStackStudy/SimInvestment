import React from 'react';
import './SideBar.scss';
import LayoutMenu from './LayoutMenu';
import imgMarket from '../images/market.png';
import imgStatus from '../images/status.png';
import imgTrend from '../images/trend.png';

function SideBar() {
    return (
        <div className="SideBar">
            <LayoutMenu imgSrc={imgMarket}>주식장터</LayoutMenu>
            <LayoutMenu imgSrc={imgStatus}>내 거래 현황</LayoutMenu>
            <LayoutMenu imgSrc={imgTrend}>내 동향</LayoutMenu>
        </div>
    );
}

export default SideBar;
