import { InputText } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
//import { LoginFormStore } from '../../../forms/LoginForm/LoginFormStore';
//import { Label } from '../../../components/Label/Label';
//import { Observer } from 'mobx-react-lite';
//import { useState } from 'react';

//const store = new LoginFormStore();

export function App() {
    // const useFieldUpdate = (fieldName) => (ev) => {
    //     store.updateField(fieldName, ev.currentTarget.value);
    // };

    const formData = new FormData();
    const useFormData = (fieldName) => (ev) => {
        formData.set(fieldName, ev.target.value);
    };

    const store = {
        title: 'Логин:',
        value: '',
        placeholder: 'Телефон или e-mail',
        error: '',
    };

    const useFetch = () => {
        console.log(formData.get('login'));
    };

    return (
        <form>
            <InputText {...store} onChange={useFormData('login')} />
            <Button title={'Send'} onClick={useFetch} />
        </form>
    );
}
