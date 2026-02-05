import { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { userFieldsConfig } from '../config/fieldsConfig';

export default function UserModal({ open, onClose, onSubmit, form, setForm, isEdit }) {
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = (name, value) => {
        const fieldConfig = userFieldsConfig.find(f => f.name === name);
        if (!fieldConfig) return '';

        const { validation } = fieldConfig;

        if (validation.required && (!value || value.toString().trim() === '')) {
            return 'This field is required';
        }

        if (validation.pattern && value) {
            const regex = validation.pattern;
            if (!regex.test(value.toString())) {
                return validation.errorMessage || 'Invalid format';
            }
        }

        if (validation.minLength && value && value.toString().length < validation.minLength) {
            return validation.errorMessage || `Minimum ${validation.minLength} characters required`;
        }

        if (name === 'dob' && value) {
            const today = new Date();
            const dobDate = new Date(value);
            if (dobDate > today) {
                return 'Date of birth cannot be in the future';
            }
        }

        return '';
    };

    const validateForm = () => {
        const newErrors = {};
        userFieldsConfig.forEach(field => {
            const error = validateField(field.name, form[field.name]);
            if (error) newErrors[field.name] = error;
        });
        return newErrors;
    };

    const handleSubmit = () => {
        const newErrors = validateForm();
        setErrors(newErrors);

        // Mark all fields as touched for error display
        const allTouched = {};
        userFieldsConfig.forEach(field => {
            allTouched[field.name] = true;
        });
        setTouched(allTouched);

        if (Object.keys(newErrors).length === 0) {
            onSubmit();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        if (touched[name] || errors[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));

        const error = validateField(name, form[name]);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    useEffect(() => {
        if (!open) {
            setErrors({});
            setTouched({});
        }
    }, [open]);

    const hasErrors = Object.keys(errors).some(key => errors[key]);

    return (
        <Modal show={open} onHide={onClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{isEdit ? "Update User" : "Add New User"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="row">
                        {userFieldsConfig.map(field => (
                            <div className="col-md-6" key={field.name}>
                                <Form.Group className="mb-3" controlId={field.name}>
                                    <Form.Label>
                                        {field.label}
                                        {field.validation.required && <span className="text-danger"> *</span>}
                                    </Form.Label>
                                    <Form.Control
                                        type={field.type}
                                        name={field.name}
                                        value={form[field.name] || ''}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={!!errors[field.name] && touched[field.name]}
                                        placeholder={field.placeholder}
                                        max={field.type === 'date' ? field.validation.maxDate : undefined}
                                        required={field.validation.required}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors[field.name]}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        ))}
                    </div>

                    {hasErrors && (
                        <Alert variant="danger" className="mt-3">
                            <i className="bi bi-exclamation-triangle me-2"></i>
                            Please fill mandatory fields correctly.
                        </Alert>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={hasErrors}
                >
                    {isEdit ? "Update User" : "Create User"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}