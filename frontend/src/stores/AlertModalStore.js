import { action, makeObservable, observable } from 'mobx';

class AlertModalStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    _states = {
        display: false,
        message: '',
        callback: null,
    };

    get states() {
        return this._states;
    }

    @action
    setState(key, value) {
        this._states = {
            ...this._states,
            [key]: value,
        };
    }
}

export default AlertModalStore;
