import { action, makeObservable, observable } from 'mobx';

class AlertStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    _states = {
        display: false,

        // 알림창에 띄울 메시지
        message: '',

        // 버튼을 2개 생성할지 여부
        isMultiButton: false,

        // 버튼에 출력되는 텍스트
        buttonText: {
            confirm: '확인',
            cancel: '취소',
        },

        // 버튼을 클릭했을 때 실행되는 함수
        callback: {
            confirm: null,
            cancel: null,
        },
    };

    get states() {
        return this._states;
    }

    @action
    initCallback() {
        this._states.callback = { confirm: null, cancel: null };
    }

    @action
    initButtonText() {
        this._states.buttonText = { confirm: '확인', cancel: '취소' };
    }

    @action
    setState(key, value) {
        this._states = {
            ...this._states,
            [key]: value,
        };
    }

    @action
    setStates(states) {
        this._states = {
            ...this._states,
            ...states,
        };
    }
}

export default AlertStore;
