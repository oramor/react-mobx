import { InputText } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { MainFormStore } from '../../../forms/MainForm/MainFormStore';

const store = new MainFormStore();

export function Form() {
    const useFieldUpdate = (fieldName) => (ev) => {
        store.updateField(fieldName, ev.currentTarget.value);
    };

    return (
        <form>
            <InputText {...store.loginField} onChange={useFieldUpdate} />
            <Button />
        </form>
    );
}
