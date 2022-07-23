import { LoginFormSchema } from './LoginFormSchema';
import { makeAutoObservable } from 'mobx';

export class LoginFormStore {
    private _login: FormFieldSchema = {
        ...LoginFormSchema['login'],
        error: '',
        value: '',
    };
    constructor() {
        makeAutoObservable(this);
    }

    get login() {
        return this._login;
    }

    updateLogin(v: string) {
        this._login.value = v;
    }
}
