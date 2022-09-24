import { BaseFormContext } from '../BaseFormContext';
import { SendButton } from './SendButton';

interface IFormProps {
    context: BaseFormContext;
    children: any;
}

export function Form({ context, children }: IFormProps) {
    console.log('Form render with topError: ', context.topError);
    return (
        <form>
            {context.topError && (
                <div className="_topError">{context.topError}</div>
            )}
            <fieldset>{children}</fieldset>
            <SendButton onClick={context.sendForm.bind(context)} />
        </form>
    );
}
