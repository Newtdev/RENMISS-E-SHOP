import * as Yup from 'yup';

export const CreateShopSchema = Yup.object().shape({
  name: Yup.string().required('Shop name is required!'),
  description: Yup.string().required('description is required!'),
  phoneNumber: Yup.string().required('Email is required!'),
  email: Yup.string()
    .required('Password is required!')
    .email('invalid email is required!'),
  address: Yup.string().required('Address required'),
});
