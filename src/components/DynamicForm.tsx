import React, { useState } from 'react';
import FormRow from './FormRow';
import { useForm } from 'react-hook-form';
import Modal from './Modal';
import { FormProps } from '../types/formTypes';

import '../styles/DynamicForm.scss';

export default function DynamicForm({ schema }: FormProps) {
    const [submittedData, setSubmittedData] = useState<any | null>(null);
    const [showModal, setShowModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onChange',
    });
    const onSubmit = (data: any) => {
        setSubmittedData(data);
        setShowModal(true);
    };

    return (
        <div className="form-container">
            <h2>{schema.title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {schema.fields.map((field, index) => (
                    <FormRow
                        key={index}
                        field={field}
                        register={register}
                        errors={errors}
                    />
                ))}
                <div className="submit-wrapper">
                    <button type="submit" disabled={!isValid} className="submit-btn">
                        Submit
                    </button>
                </div>
            </form>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h3>Form Submitted</h3>
                    <div className="submitted-fields">
                        {submittedData &&
                            Object.keys(submittedData).map((key) => (
                                <div key={key}>
                                    <strong>{key}:</strong> {submittedData[key]}
                                </div>
                            ))}
                    </div>
                </Modal>
            )}
        </div>
    );
}
