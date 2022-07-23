type InputTextProps = FormFieldSchema & {
    onChange?: InputChangeHandler;
};

function useLanguage() {
    return 'ru';
}

function useLocale(obj?: DictionaryNode) {
    if (obj) {
        const lang = useLanguage();
        return obj[lang];
    }
    return null;
}

export function InputText({ titles, placeholders, onChange }: InputTextProps) {
    return (
        <label>
            {useLocale(titles)}
            <input
                type="text"
                placeholder={useLocale(placeholders)}
                onChange={onChange}
            />
        </label>
    );
}
