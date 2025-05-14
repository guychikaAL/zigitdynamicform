import React from 'react';
import { FieldProps } from '../types/formTypes';
import { validationChecker } from '../utils/validations';

import '../styles/FormRow.scss'

export default function FormRow({ field, register, errors }: FieldProps) {

    const validationRules = validationChecker(field);

    return (
        <div className="form-row-wrapper">
            <div className="form-row-content">

                <div className="form-row">
                    <label className="form-label">{field.label}</label>
                    {field.type === 'input' && (
                        <input type="text" {...register(field.label, validationRules)} />
                    )}
                    {field.type === 'textarea' && (
                        <textarea {...register(field.label, validationRules)} />
                    )}
                    {field.type === 'input_number' && (
                        <input
                            type="number"
                            {...register(field.label, {
                                ...validationRules,
                                valueAsNumber: true,
                            })}></input>
                    )}
                    {field.type === 'select' && (
                        <select {...register(field.label, validationRules)} className="form-select">
                            <option value="">Select</option>
                            {field.options?.map((option) => (
                                <option key={option.key} value={option.value}>
                                    {option.key}
                                </option>
                            ))}
                        </select>
                    )}

                </div>

                <div className="form-error">
                    {errors[field.label] && (
                        <span className="error-text">{errors[field.label]?.message as string}</span>
                    )}
                </div>
            </div>
        </div>
    );
}