import { makeObservable, action, observable, computed } from 'mobx';

export abstract class BaseFormContext {
    public _topError = '';

    public get topError() {
        console.log('getting top error:', this._topError);
        return this._topError;
    }

    protected makeObservableWrapper() {
        const fields = {
            _field1: observable,
            field1: computed,
        };

        const obj: any = {
            _topError: observable,
            topError: computed,
            updateTopError: action,
            sendForm: action,
            updateField: action,
            ...fields,
        };

        /**
         * Первым аргументом должна быть ссылка
         * на текущий класс!
         */
        makeObservable(this, obj);
    }

    public async sendForm() {
        console.log('Init sendForm');
        console.log('topError1: ' + this.topError);
        this.updateTopError('Top error message');
        console.log('topError2: ' + this.topError);
    }

    public updateField(fieldName: string, value: string) {
        this['_' + fieldName]['value'] = value;
    }

    public updateTopError(message: string) {
        this._topError = message;
    }
}
