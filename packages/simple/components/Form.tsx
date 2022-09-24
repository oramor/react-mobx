import { TestFormContext } from '../forms/TestForm/TestFormContext';

interface IFormProps {
    context: TestFormContext;
    children: any;
}

export function Form({ children }: IFormProps) {
    return (
        <form>
            <fieldset>{children}</fieldset>
        </form>
    );
}
