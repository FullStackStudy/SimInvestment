import React from 'react';
import './Alert.scss';
import Button from '../button/Button';
import { observer } from 'mobx-react';
import AlertVM from './AlertVM';

const vm = new AlertVM();

// 알림창 닫을때 초기화
const initAlert = () => {
    vm.initCallback();
    vm.initButtonText();
    document.body.style.overflow = 'unset';
};

/**
 * 알림창을 연다.
 * @param option
 * message: 알림창에 표시될 텍스트 /
 * isMultiButton: 버튼을 2개 생성할지 여부, true이면 확인, 취소 두개의 버튼이 생성된다. /
 * buttonText: 알림창 버튼에 표시되는 텍스트로 confirm과 cancel 두 버튼에 대한 텍스트를 각각 지정할 수 있다. /
 * callback: 알림창 버튼을 클릭하면 실행되는 함수로 confirm과 cancel 두 버튼에 대한 이벤트를 각각 지정할 수 있다.
 */
export const openAlert = (option) => {
    document.body.style.overflow = 'hidden';
    vm.setState('display', true);
    vm.setStates(option);
};

const Alert = observer(() => {
    const { display, message, isMultiButton, buttonText, callback } = vm.states;

    const confirm = () => {
        vm.setState('display', false);
        if (callback.confirm) callback.confirm();
        initAlert();
    };

    const cancel = () => {
        vm.setState('display', false);
        if (callback.cancel) callback.cancel();
        initAlert();
    };

    const renderButtons = () => {
        return (
            <>
                <Button size="small" color="blue" onClick={confirm}>
                    {buttonText.confirm}
                </Button>
                {isMultiButton && (
                    <Button size="small" color="red" onClick={cancel}>
                        {buttonText.cancel}
                    </Button>
                )}
            </>
        );
    };

    return (
        <div className="Alert" display={display ? 'true' : 'false'}>
            <div className="modal">
                <p>{message}</p>
                <div className="button">{renderButtons()}</div>
            </div>
        </div>
    );
});

export default Alert;
