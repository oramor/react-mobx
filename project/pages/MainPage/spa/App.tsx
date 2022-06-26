import { InputText } from '../../../components/InputText/InputText';
import { Observer } from 'mobx-react-lite';
import { MainStore } from './stores/MainStore';

const mainStore = new MainStore();

const onChangeHandler = (ev) => {
    mainStore.changeTextboxPlaceholder(ev.currentTarget.value);
    console.log(mainStore.textboxPlaceholder);
};

export function App() {
    return (
        <>
            <InputText onChange={onChangeHandler} />
            <Observer>
                {() => <InputText placeholder={mainStore.textboxPlaceholder} />}
            </Observer>
        </>
    );
}
