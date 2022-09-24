import { makeObservable, action, observable, computed } from 'mobx';

export class TestFormContext {
    _field1: FormFieldState = {
        value: '',
    };

    constructor() {
        /**
         * Не следует забывать, что первым аргументом данной
         * функции должна быть ссылка на сам стор
         */
        makeObservable(this, {
            field1: computed,
            updateField1: action,
            _field1: observable,
        });
    }

    get field1() {
        return this._field1;
    }

    updateField1(v: string) {
        this._field1.value = v;
    }
}

export const ctx = new TestFormContext();
