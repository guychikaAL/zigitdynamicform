import { useEffect, useState } from 'react';
import { FormSchema } from '../types/formTypes';



const ENDPOINT_URL = 'https://private-705dcb-formgenerator1.apiary-mock.com/form_fields';

export const useSchema = () => {
    const [schema, setSchema] = useState<FormSchema[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSchema = async () => {
            try {
                const res = await fetch(ENDPOINT_URL);
                const data = await res.json();
                setSchema(data);
            } catch (err) {
                setError('Fetch Failed');
            }
        }
        fetchSchema();
    }, []);
    return { schema, error };
};
