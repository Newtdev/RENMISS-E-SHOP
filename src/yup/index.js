import * as Yup from 'yup';

export const CreateShopSchema = Yup.object().shape({
  name: Yup.string().required('Shop name is required!'),
  description: Yup.string().required('description is required!'),
  phoneNumber: Yup.string().required('Phone is required!'),
  email: Yup.string()
    .required('Email is required!')
    .email('invalid email is required!'),
  address: Yup.string().required('Address required'),
});

export const CreateHandleSchema = Yup.object().shape({
  handleImage: Yup.string().required('Handle Image is required!'),
  handleName: Yup.string().required('Handle Name is required!'),
  handleDescription: Yup.string().required('Handle Description is required!'),
  workExperience: Yup.string().required(
    'Provider Working Experience is required!',
  ),
  handleCategory: Yup.string().required('Category is required!'),
  serviceName: Yup.string().required('Service Name is required!'),
  serviceType: Yup.string().required('Service Type is required!'),
  serviceLocation: Yup.string().required('Service Location is required!'),
  serviceDescription: Yup.string().required('Service Description is required!'),
  servicePrice: Yup.string().required('Price is required!'),
});

export const AddServiceSchema = Yup.object().shape({
  serviceName: Yup.string().required('Service Name is required!'),
  serviceType: Yup.string().required('Service Type is required!'),
  serviceLocation: Yup.string().required('Service Location is required!'),
  serviceDescription: Yup.string().required('Service Description is required!'),
  servicePrice: Yup.string().required('Price is required!'),
});
