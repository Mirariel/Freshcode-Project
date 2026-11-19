import * as yup from 'yup';

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  email: yup.string().email().trim().required(),
  password: yup.string().trim().required(),
});
