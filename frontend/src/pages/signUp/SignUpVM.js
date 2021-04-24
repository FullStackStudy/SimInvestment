import { action, makeObservable, observable } from 'mobx';

class SignUpVM {
    constructor() {
        makeObservable(this);
    }

    @observable
    _states = {
        // form 데이터
        id: '',
        password: '',
        passwordConfirm: '',
        name: '',
        tel: '',
        email: '',

        passwordValidCheckerDisplay: 'false',
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

export default SignUpVM;
