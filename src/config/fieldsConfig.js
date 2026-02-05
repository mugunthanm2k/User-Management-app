export const userFieldsConfig = [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'John',
        validation: {
            required: true,
            minLength: 2,
            pattern: /^[A-Za-z\s]+$/,
            errorMessage: 'First name must be at least 2 letters'
        }
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Doe',
        validation: {
            required: true,
            minLength: 2,
            pattern: /^[A-Za-z\s]+$/,
            errorMessage: 'Last name must be at least 2 letters'
        }
    },
    {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'john@example.com',
        validation: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: 'Please enter a valid email address'
        }
    },
    {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: '1234567890',
        validation: {
            required: true,
            pattern: /^[0-9]{10}$/,
            errorMessage: 'Please enter a valid 10-digit phone number'
        }
    },
    {
        name: 'dob',
        label: 'Date of Birth',
        type: 'date',
        validation: {
            required: true,
            maxDate: new Date().toISOString().split('T')[0],
            errorMessage: 'Date of birth cannot be in the future'
        }
    },
    {
        name: 'address',
        label: 'Address',
        type: 'text',
        placeholder: '123 Main St, City, State',
        validation: {
            required: false,
            minLength: 5,
            errorMessage: 'Address should be at least 5 characters'
        }
    }
];

export const getEmptyForm = () => {
    const emptyForm = {};
    userFieldsConfig.forEach(field => {
        emptyForm[field.name] = '';
    });
    return emptyForm;
};

// Helper function to map form to API payload
export const mapFormToApi = (form) => {
    const payload = {};
    userFieldsConfig.forEach(field => {
        payload[field.name] = form[field.name] || '';
    });
    return payload;
};