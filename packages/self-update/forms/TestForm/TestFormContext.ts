import { BaseFormContext } from '../../BaseFormContext';
//import { makeObservable, action, observable, computed } from 'mobx';

class TestFormContext extends BaseFormContext {
    _field1: FormFieldState = {
        name: 'Field1',
        value: '',
    };

    constructor() {
        super();
        // makeObservable({
        //     field1: computed,
        //     updateField1: action,
        //     _field1: observable
        // });
        this.makeObservableWrapper();
    }

    get field1() {
        return this._field1;
    }

    // updateField1(v: string) {
    //     this._field1.value = v;
    // }
}

export const ctx = new TestFormContext();
