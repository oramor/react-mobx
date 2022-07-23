import { observer } from 'mobx-react';
import { InputText } from '../../components/InputText/InputText';
import { Label } from '../../components/Label/Label';
import { LoginFormStore } from './LoginFormStore';
import { InputTextComputed } from '../../components/InputText/InputTextComputed';
//import { trace } from 'mobx';

const store = new LoginFormStore();

// const onChangeLoginHandler: InputChangeHandler = (ev) => {
//     store.updateLogin(ev.target.value);
// };

// const onChangeOneHandler: InputChangeHandler = (ev) => {
//     store.updateTestOne(ev.target.value);
// };

// const onChangeTwoHandler: InputChangeHandler = (ev) => {
//     store.updateTestTwo(ev.target.value);
// };

const onChangeLoginHandler = store.inputUpdateFactory('login');
const onChangeOneHandler = store.inputUpdateFactory('testOne');
const onChangeTwoHandler = store.inputUpdateFactory('testTwo');

export const LoginForm = observer(() => {
    //trace(true);
    return (
        <>
            <InputText {...store.login} onChange={onChangeLoginHandler} />
            <Label content={store.login.value} />

            <InputTextComputed
                {...store.testOne}
                onChange={onChangeOneHandler}
            />
            <Label content={store.testOne.value} />

            <InputTextComputed
                {...store.testTwo}
                onChange={onChangeTwoHandler}
            />
            <Label content={store.testTwo.value} />
        </>
    );
});
