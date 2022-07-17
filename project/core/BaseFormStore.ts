export interface FormFieldNode {
    title: string;
    value: string;
    placeholder?: string;
    error?: string;
}

export abstract class BaseFormStore {
    public updateField(fieldName) {
        if (Object.keys(this).includes(fieldName)) {
            throw new Error(`Not found Field ${fieldName}`);
        }
    }
}
