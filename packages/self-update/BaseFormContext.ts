//import { makeObservable } from 'mobx';
import { makeObservable, action, observable, computed } from 'mobx';

export abstract class BaseFormContext {
    public observableTopError = '';

    public get topError() {
        console.log('getting top error:', this.observableTopError);
        return this.observableTopError;
    }

    protected makeObservableWrapper() {
        //         const fields = {
        //     _field1: observable,
        //     field1: computed
        // }

        const obj: any = {
            observableTopError: observable,
            topError: computed,
            updateTopErrorAction: action,
            sendForm: action,
            //updateField: action,
            //...fields
        };

        makeObservable(obj);
    }

    public async sendForm() {
        this.updateTopErrorAction('Top error message');
    }

    public updateField(fieldName: string, value: string) {
        this['_' + fieldName]['value'] = value;
    }

    public updateTopErrorAction(message: string) {
        this.observableTopError = message;
    }
}
