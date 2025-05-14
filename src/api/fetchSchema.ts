import { FormSchema } from '../types/formTypes';

const ENDPOINT_URL = 'https://private-705dcb-formgenerator1.apiary-mock.com/form_fields';

export const fetchFormSchema = async (): Promise<FormSchema[]> => {
    const res = await fetch(ENDPOINT_URL);
    if (!res.ok) {
        throw new Error('Failed to fetch schema');
    }
    return res.json();
};
