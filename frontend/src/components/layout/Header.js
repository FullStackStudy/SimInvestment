import React from 'react';
import './scss/Header.scss';
import MainStore from '../../stores/MainStore';
import Button from '../Button';

const mainStore = new MainStore();

function Header() {
    const { name } = mainStore.states;
    return (
        <div className="Header">
            <img src="#" alt="logo" />
            <div className="user-info">
                <p>
                    <span className="user-name">{name}</span>님 환영합니다.
                </p>
                <Button size="small" color="gray">
                    로그아웃
                </Button>
            </div>
        </div>
    );
}

export default Header;
