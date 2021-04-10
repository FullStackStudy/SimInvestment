import { action, makeObservable, observable } from 'mobx';

class MainStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    _states = {
        name: '홍길동',
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

export default MainStore;
