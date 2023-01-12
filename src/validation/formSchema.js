// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape( {
  username: yup
  .string()
  .trim()
  .required("username is required!")
  .min(3, 'username must be 3 characters long!'),
  email: yup
  .string()
  .email('must be a valid email address')
  .required('you need an email!'),
  role: yup
  .string()
  .oneOf(['instructor', 'student', 'alumni'], 'role is required!'),
  civil: yup
  .string()
  .oneOf(['married', 'single'], 'civil status is required!'),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean()
})

export default formSchema;