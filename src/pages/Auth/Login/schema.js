import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});
