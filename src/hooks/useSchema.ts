import { useEffect, useState } from 'react';
import { FormSchema } from '../types/formTypes';
import { fetchFormSchema } from '../api/fetchSchema';

export const useSchema = () => {
    const [schema, setSchema] = useState<FormSchema[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchSchema = async () => {
            try {
                const data = await fetchFormSchema();
                setSchema(data);
            } catch (err) {
                setError('Fetch Failed');
            }
        };
        fetchSchema();
    }, []);
    return { schema, error };
};
