import React from 'react';
import { FormFieldNode } from '../../core/BaseFormStore';

type InputTextProps = FormFieldNode & {
    onChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
};

// export interface InputTextProps {
//     placeholder?: string;
//     onChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
// }

export function InputText({ title, placeholder, onChange }: InputTextProps) {
    return (
        <label>
            {title}
            <input type="text" placeholder={placeholder} onChange={onChange} />
        </label>
    );
}
