import { observer } from 'mobx-react';
import { InputText } from '../../components/InputText/InputText';
import { Label } from '../../components/Label/Label';
import { LoginFormStore } from './LoginFormStore';
//import { trace } from 'mobx';

const store = new LoginFormStore();

const onChangeHandler: InputChangeHandler = (ev) => {
    store.updateLogin(ev.target.value);
};

export const LoginForm = observer(() => {
    //trace(true);
    return (
        <>
            <InputText {...store.login} onChange={onChangeHandler} />
            <Label content={store.login.value} />
        </>
    );
});
