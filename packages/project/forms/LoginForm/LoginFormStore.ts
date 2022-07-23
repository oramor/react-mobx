import { LoginFormSchema } from './LoginFormSchema';
//import { makeAutoObservable } from 'mobx';
import { BaseFormFront } from '../../core/BaseFormFront';

export class LoginFormStore extends BaseFormFront {
    private _login: FormFieldSchema = {
        ...LoginFormSchema['login'],
        error: '',
        value: '',
    };
    private _testOne: FormFieldSchema = {
        ...LoginFormSchema['testOne'],
        error: '',
        value: '',
    };
    private _testTwo: FormFieldSchema = {
        ...LoginFormSchema['testTwo'],
        error: '',
        value: '',
    };
    constructor() {
        super('ru');
        this.makeObservableWrapper();
        //makeAutoObservable(this);
    }

    get login() {
        return {
            ...this._login,
        };
    }

    get testOne() {
        return {
            title: this._testOne.titles.ru,
            value: this._testOne.value,
            placeholders: this._testOne?.placeholders?.ru,
            required: this._testOne.required,
            error: this._testOne.error,
        };
    }

    get testTwo() {
        return {
            title: this._testTwo.titles.ru,
            value: this._testTwo.value,
            placeholders: this._testTwo?.placeholders?.ru,
            required: this._testTwo.required,
            error: this._testTwo.error,
        };
    }

    // updateLogin(v: string) {
    //     this._login.value = v;
    // }

    // updateTestOne(v: string) {
    //     this._testOne.value = v;
    // }

    // updateTestTwo(v: string) {
    //     this._testTwo.value = v;
    // }
}
