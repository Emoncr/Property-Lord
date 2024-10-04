import * as yup from 'yup';

// ==== Password Validator =====//
export const passwordValidator = () => {
    const validPassword = yup
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .max(20, 'Password must be no longer than 20 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(
            /[@$!%*?&#]/,
            'Password must contain at least one special character'
        )
        .required('Password is required');

    return validPassword;
};

// ==== Email Validator =====//
export const emailValidator = () => {
    const validateEmail = yup
        .string()
        .email('Please enter a valid email address')
        .required('Email is required');

    return validateEmail;
};

// ===== Phone Number Validator ======//
export const phoneValidator = () => {
    // Regex for validate BD phone number - May Need to update
    const phoneValidationRegex = /^(\+8801[3-9]\d{8}|01[3-9]\d{8})$/;
    const validatePhoneNumber = yup
        .string()
        .matches(phoneValidationRegex, 'Mobile number is not valid')
        .required('Mobile number is required');
    return validatePhoneNumber;
};
