import { observer } from 'mobx-react';
import { Form } from '../components/Form';
import { InputText } from '../components/InputText';
import { ctx } from '../forms/TestForm/TestFormContext';

export const TestBlock = observer(() => {
    return (
        <Form context={ctx}>
            <InputText name={ctx.field1.name} context={ctx} />
        </Form>
    );
});
