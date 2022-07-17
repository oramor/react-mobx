import { BaseFormStore, FormFieldNode } from '../../core/BaseFormStore';

export class LoginFormStore extends BaseFormStore {
    private _loginField: FormFieldNode = {
        title: 'Логин:',
        value: '',
        placeholder: 'Телефон или e-mail',
        error: '',
    };
    constructor() {
        super();
    }

    get loginField() {
        return this._loginField;
    }

    updateLoginFieldValue(value) {
        this._loginField.value = value;
    }
}
