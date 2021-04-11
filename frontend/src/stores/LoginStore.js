import { action, makeObservable, observable } from 'mobx';

class LoginStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    _states = {
        id: '',
        password: '',
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

    @action
    setStates(states) {
        this._states = {
            ...this._states,
            ...states,
        };
    }
}

export default LoginStore;
