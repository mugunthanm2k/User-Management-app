import { mapFormToApi as configMapFormToApi } from '../config/fieldsConfig';

export const mapFormToApi = (form) => ({
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone: form.phone,
    dob: form.dob
});

export const mapFormToApiFromConfig = configMapFormToApi;