import { BaseFormContext } from '../../BaseFormContext';
//import { makeObservable, action, observable, computed } from 'mobx';

class TestFormContext extends BaseFormContext {
    _field1: FormFieldState = {
        value: '',
    };

    constructor() {
        super();
        this.makeObservableWrapper();
    }

    get field1() {
        return this._field1;
    }
}

export const ctx = new TestFormContext();
