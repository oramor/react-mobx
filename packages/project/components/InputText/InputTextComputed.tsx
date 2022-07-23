type InputTextProps = FormFieldComputed & {
    onChange?: InputChangeHandler;
};

export function InputTextComputed({
    title,
    placeholder,
    onChange,
}: InputTextProps) {
    return (
        <label>
            {title}
            <input type="text" placeholder={placeholder} onChange={onChange} />
        </label>
    );
}
