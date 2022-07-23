type SupportedLangs = 'ru' | 'en';

type DictionaryNode = Record<Required<SupportedLangs>, string>;

interface FormSchemaNode {
    titles: DictionaryNode;
    required: boolean;
    placeholders?: DictionaryNode;
    errors?: DictionaryNode;
}

type FormSchema = Record<string, FormSchemaNode>;

type FormFieldSchema = FormSchemaNode & {
    error: string;
    value: string;
};

type FormFieldSchemaComputed = {
    value: string;
    title: string;
    required: boolean;
    error: string;
    placeholder?: string;
};

type InputChangeHandler = (ev: React.FocusEvent<HTMLInputElement>) => void;
