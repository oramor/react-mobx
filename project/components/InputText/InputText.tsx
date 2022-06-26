import React from 'react';

export interface InputTextProps {
    placeholder?: string;
    onChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
}

export function InputText(props: InputTextProps) {
    return <input type="text" placeholder={props.placeholder} onChange={props.onChange} />;
}
