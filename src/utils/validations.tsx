import { Field } from '../types/formTypes';

function replaceValueErrorMessage(message: string, value: any) {
    return message.replace('{{value}}', value);
}

export function validationChecker(field: Field): any {
    const validationRules: any = {};

    if (field.rules.required?.value != null) {
        validationRules.required = {
            value: field.rules.required.value,
            message: field.rules.required.error_message,
        };
    }

    if (field.rules.min?.value != null) {
        if (field.type === 'input_number') {
            validationRules.min = {
                value: field.rules.min.value,
                message: replaceValueErrorMessage(
                    field.rules.min.error_message,
                    field.rules.min.value
                ),
            };
        } else {
            validationRules.minLength = {
                value: field.rules.min.value,
                message: replaceValueErrorMessage(
                    field.rules.min.error_message,
                    field.rules.min.value
                ),
            };
        }
    }

    if (field.rules.max?.value != null) {
        if (field.type === 'input_number') {
            validationRules.max = {
                value: field.rules.max.value,
                message: replaceValueErrorMessage(
                    field.rules.max.error_message,
                    field.rules.max.value
                ),
            };
        } else {
            validationRules.maxLength = {
                value: field.rules.max.value,
                message: replaceValueErrorMessage(
                    field.rules.max.error_message,
                    field.rules.max.value
                ),
            };
        }
    }

    if (field.rules.regex?.value != null) {
        validationRules.pattern = {
            value: new RegExp(field.rules.regex.value),
            message: field.rules.regex.error_message,
        };
    }

    return validationRules;
}
