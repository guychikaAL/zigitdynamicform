import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface FormSchema {
    title: string;
    fields: Field[];
}
export interface Field {
    type: string;
    label: string;
    rules: {
        required?: FieldRule;
        min?: FieldRule;
        max?: FieldRule;
        regex?: FieldRule | null;
    };
    options?: { key: string; value: string }[];
}
export interface FieldRule {
    value: any;
    error_message: string;
}
export interface FormProps {
    schema: FormSchema;
}
export interface FieldProps {
    field: Field;
    register: UseFormRegister<any>;
    errors: FieldErrors;
}

export interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}
