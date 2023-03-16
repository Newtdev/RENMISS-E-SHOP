import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {
  Button,
  ConfirmationUI,
  CustomInput,
  CustomTextArea,
  Loader,
  ModalWrapper,
  NavigationHeaderWapper,
  PageLoader,
  ScreenWrapper,
} from '../../sharedcomponent';
import 'react-native-get-random-values';
import ImagePicker from 'react-native-image-crop-picker';
import Upload from '../../assets/upload.png';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  active,
  createShopInfo,
  notActive,
  request,
  selectNewShop,
  show,
  showLoader,
} from '../../features/createshop';
import {useFormik} from 'formik';
import {CreateShopSchema} from '../../yup';
import {nanoid} from 'nanoid';

const CreateShop = ({navigation}) => {
  const dispatch = useDispatch();
  const showModal = useSelector(show);
  const loading = useSelector(request);
  const {
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      description: '',
      phoneNumber: '',
      email: '',
      address: '',
      imageURL: '',
    },
    validationSchema: CreateShopSchema,
    onSubmit: values => {
      setSubmitting(true);
      dispatch(active());

      console.log({...values, idempotentKey: nanoid(32)});
    },
  });

  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setFieldValue('imageURL', image);
      })
      .catch(err => console.log(err));
  };

  return (
    <ScreenWrapper
      content={
        <NavigationHeaderWapper name="Create Shop" back={navigation.goBack} />
      }>
      <PageLoader submitting={loading}>
        <Loader />
      </PageLoader>

      <ModalWrapper submitting={showModal}>
        <ConfirmationUI
          heading="Transaction Confirmation"
          para="You will be charged R20,000 for this operation"
          onRequest={() => dispatch(showLoader())}
          onClose={() => dispatch(notActive())}
        />
      </ModalWrapper>
      
      <ScrollView>
        {/* <NavigationHeaderWapper name="Create Shop" back={navigation.goBack} /> */}
        <View className="h-screen  w-full mx-auto px-10 mb-5">
          {/* <View className="h-24 flex flex-row justify-center items-center">
            <Text className="text-xl font-bold text-black">Create Shop</Text>
          </View> */}
          <View className="flex flex-col justify-evenly w-full">
            <CustomInput
              placeholder="Enter shop name"
              type="text"
              value={values?.name}
              onChangeText={handleChange('name')}
              error={errors?.name}
              touched={touched?.name}
            />
            <View className="mt-3">
              <CustomTextArea
                placeholder="Description"
                type="text"
                value={values?.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                error={errors?.description}
                touched={touched?.description}
              />
            </View>
          </View>
          <View className=" flex flex-col justify-between">
            <Text className="text-lg text-[#003356] ml-2 mt-4 mb-2 ">
              Contact Address
            </Text>
            <CustomInput
              placeholder="Phone number"
              type="tel"
              value={values?.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              error={errors?.phoneNumber}
              touched={touched?.phoneNumber}
            />

            <CustomInput
              placeholder="Email address"
              type="email"
              value={values?.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors?.email}
              touched={touched?.email}
            />
            <CustomInput
              placeholder="Physical address"
              type="text"
              value={values?.address}
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              error={errors?.address}
              touched={touched?.address}
            />
          </View>

          <View className="mx-auto mt-9 ">
            <Pressable
              className="h-28 w-36 bg-white rounded-lg flex flex-col items-center justify-center p-3"
              onPress={handleChoosePhoto}>
              {values?.imageURL?.banner ? (
                <Image
                  source={{
                    uri: `${values?.imageURL}`,
                  }}
                  className=" h-16 w-24"
                  resizeMode="cover"
                />
              ) : null}
              {!values?.imageURL ? (
                <Image source={Upload} resizeMode="cover" />
              ) : null}
              <Text className="text-[10px] mt-2 font-bold">
                Add shop banner
              </Text>
            </Pressable>
          </View>
          <View className="w-full bg-red-800 mt-10 flex flex-row items-center justify-center">
            <Button name="Done" onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CreateShop;
