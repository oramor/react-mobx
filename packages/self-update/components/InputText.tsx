import { BaseFormContext } from '../BaseFormContext';
import { FocusEvent } from 'react';

interface IInputTextProps {
    context: BaseFormContext;
    name: string;
}

export function InputText({ context, name }: IInputTextProps) {
    const { title } = context[name];

    /**
     * При потере фокуса отправляем введенное пользователем значение в стейт
     * и, соответственно, перерендериваем весь (!) компонент формы, т.к. стейт
     * общий на всю форму.
     */
    function onBlur(ev: FocusEvent<HTMLInputElement>) {
        context.updateField(name, ev.target.value);
    }

    return (
        <div>
            <input id={name} onBlur={onBlur} />
            <label htmlFor={name}>{title}</label>
        </div>
    );
}
