import React from 'react';
import './scss/AlertModal.scss';
import Button from './Button';
import { observer } from 'mobx-react';
import AlertModalStore from '../stores/AlertModalStore';

const modalStore = new AlertModalStore();

const changeState = (key, value) => {
    modalStore.setState(key, value);
};

export const openAlert = (message, callback) => {
    changeState('display', true);
    changeState('message', message);
    changeState('callback', callback);
};

const AlertModal = observer(() => {
    const { display, message, callback } = modalStore.states;

    const close = () => {
        changeState('display', false);
        if (callback) callback();
        changeState('callback', null);
    };

    return (
        <div className="AlertModal" display={display ? 'true' : 'false'}>
            <div className="modal">
                <p>{message}</p>
                <div className="modal__button">
                    <Button size="small" color="blue" onClick={close}>
                        확인
                    </Button>
                </div>
            </div>
        </div>
    );
});

export default AlertModal;
