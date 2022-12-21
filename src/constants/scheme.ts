import * as yup from 'yup';

export const loginSchema = yup
    .object({
        username: yup
            .string()
            .required('username is required')
            .email('username must be a valid email')
            .min(6, 'username must have at least 6 character'),
        password: yup
            .string()
            .required('password is required')
            .min(6, 'password must have at least 6 character'),
    })
    .required();
