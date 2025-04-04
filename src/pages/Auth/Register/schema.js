import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  first_name: yup.string()
    .required('First name is required')
    .min(3, 'First name must be at least 3 characters')
    .max(20, 'First name must be at most 20 characters'),
  last_name: yup.string()
    .required('Last name is required')
    .min(3, 'Last name must be at least 3 characters')
    .max(20, 'Last name must be at most 20 characters'),
  username: yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 150 characters'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirm_password: yup.string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  email: yup.string()
    .required('Email is required')
    .email('Invalid email address'),
});
