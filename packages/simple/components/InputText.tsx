import { TestFormContext } from '../forms/TestForm/TestFormContext';
import { FocusEvent } from 'react';

interface IInputTextProps {
    context: TestFormContext;
    name: string;
}

export function InputText({ context, name }: IInputTextProps) {
    console.log('name-----', name);
    const { title } = context[name];

    /**
     * При потере фокуса отправляем введенное пользователем значение в стейт
     * и, соответственно, перерендериваем весь (!) компонент формы, т.к. стейт
     * общий на всю форму.
     */
    function onBlur(ev: FocusEvent<HTMLInputElement>) {
        context.updateField1(ev.target.value);
    }

    return (
        <div>
            <input id={name} onBlur={onBlur} />
            <label htmlFor={name}>{title}</label>
        </div>
    );
}
