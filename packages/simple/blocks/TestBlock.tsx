import { observer } from 'mobx-react';
import { Form } from '../components/Form';
import { InputText } from '../components/InputText';
import { ctx } from '../forms/TestForm/TestFormContext';

export const TestBlock = observer(() => {
    console.log(ctx.field1);
    return (
        <Form context={ctx}>
            <InputText name="field1" context={ctx} />
            <span>{ctx.field1.value}</span>
        </Form>
    );
});
