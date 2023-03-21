import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import 'react-native-get-random-values';
import ImagePicker from 'react-native-image-crop-picker';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  ConfirmationUI,
  Loader,
  ModalWrapper,
  NavigationHeaderWapper,
  PageLoader,
  ScreenWrapper,
} from '../../sharedcomponent';
import Upload from '../../assets/upload.png';
import {
  active,
  notActive,
  request,
  show,
  showLoader,
} from '../../features/createshop';
import {useFormik} from 'formik';
import {CreateShopSchema} from '../../yup';
import {nanoid} from 'nanoid';
import {CustomSelectDropdown, CustomTextInput} from '../../components/Inputs';

const CreateInvoice = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(show);
  const loading = useSelector(request);

  const Formik = useFormik({
    initialValues: {
      productName: '',
      productPrice: '',
      customerRSSN: '',
      note: '',
    },
    validationSchema: CreateShopSchema,
    onSubmit: values => {
      //   setSubmitting(true);
      dispatch(active());

      console.log({...values, idempotentKey: nanoid(32)});
    },
  });

  return (
    <ScreenWrapper>
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
            <CustomSelectDropdown
              data={['Nike Airmax', 'Samsung S22 ultra', 'Mac pro 2020 M1']}
              search={''}
              onSelect={Formik.handleChange('categoryId')}
              error={Formik.errors?.productName}
              touched={Formik.touched?.productName}
            />
            <CustomTextInput
              placeholder="Price"
              type="text"
              value={Formik.values?.productPrice}
              onChangeText={Formik.handleChange('productPrice')}
              error={Formik.errors?.productPrice}
              touched={Formik.touched?.productPrice}
            />
            <CustomTextInput
              placeholder="Customer RSSN"
              type="text"
              value={Formik.values?.clientRssn}
              onChangeText={Formik.handleChange('clientRssn')}
              error={Formik.errors?.clientRssn}
              touched={Formik.touched?.clientRssn}
            />
            <View className="mt-3">
              <CustomTextInput
                placeholder="Note"
                type="text"
                value={Formik.values?.note}
                onChangeText={Formik.handleChange('note')}
                onBlur={Formik.handleBlur('note')}
                error={Formik.errors?.note}
                touched={Formik.touched?.note}
                multiline={true}
                numberOfLines={4}
              />
            </View>
          </View>

          <View
            className="w-[80%] h-[45%] mx-auto
            items-center  flex flex-col justify-end">
            <Button name="Send invoice" onPress={Formik.handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CreateInvoice;
