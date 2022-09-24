import { BaseFormContext } from '../BaseFormContext';
import { SendButton } from './SendButton';
import { observer } from 'mobx-react';

interface IFormProps {
    context: BaseFormContext;
    children: any;
}

export const Form = observer(({ context, children }: IFormProps) => {
    console.log('Form render with topError: ', context.topError);
    return (
        <form>
            {context._topError && (
                <div className="_topError">{context._topError}</div>
            )}
            <fieldset>{children}</fieldset>
            <SendButton onClick={context.sendForm.bind(context)} />
        </form>
    );
});
