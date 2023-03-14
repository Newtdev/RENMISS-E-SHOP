/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useFormik} from 'formik';
import {nanoid} from 'nanoid';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {SubmitButton} from '../../components/Buttons';
import Icon, {Icons} from '../../components/Icons';
import {CustomSelectDropdown, CustomTextInput} from '../../components/Inputs';
import ScreenWrapper from '../../components/ScreenWrapper';
import {COLORS} from '../../utils/Colors';
import {CreateHandleSchema} from '../../yup';

const CreateHandle = () => {
  //   const dispatch = useDispatch();
  //   const showModal = useSelector(show);
  //   const loading = useSelector(request);
  const {
    handleChange,
    onSelect,
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
      handleImage: '',
      handleName: '',
      handleDescription: '',
      workExperience: '',
      handleCategory: '',
      serviceName: '',
      serviceType: '',
      serviceLocation: '',
      serviceDescription: '',
      servicePrice: '',
    },
    validationSchema: CreateHandleSchema,
    onSubmit: values => {
      setSubmitting(true);
      //   dispatch(active());
      console.log('Okay');
      console.log({...values, idempotentKey: nanoid(32)});
    },
  });

  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const SERVICE_TYPE = ['Remote', 'Physical'];

  return (
    <ScreenWrapper>
      <SafeAreaView>
        <KeyboardAvoidingView
          keyboardVerticalOffset={10}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={{
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}>
            <ScrollView>
              <View className="mt-5 items-center">
                <Text className="text-2xl font-bold">Create Handle</Text>
              </View>
              <View>
                <CustomTextInput
                  placeholder={'Handle Image'}
                  type="text"
                  value={values?.handleImage}
                  onChangeText={handleChange('handleImage')}
                  error={errors?.handleImage}
                  touched={touched?.handleImage}
                />
                <CustomTextInput
                  placeholder={'Handle Name'}
                  type="text"
                  value={values?.handleName}
                  onChangeText={handleChange('handleName')}
                  error={errors?.handleName}
                  touched={touched?.handleName}
                  autoFocus={true}
                />
                <CustomTextInput
                  placeholder={'Handle Description'}
                  type="text"
                  value={values?.handleDescription}
                  onChangeText={handleChange('handleDescription')}
                  error={errors?.handleDescription}
                  touched={touched?.handleDescription}
                  multiline={true}
                  maxLength={50}
                />
                <CustomTextInput
                  placeholder={'Provider Working Experience'}
                  type="text"
                  value={values?.workExperience}
                  onChangeText={handleChange('workExperience')}
                  error={errors?.workExperience}
                  touched={touched?.workExperience}
                />
                <CustomSelectDropdown
                  data={countries}
                  search={true}
                  onSelect={handleChange('handleCategory')}
                  // onSelect={(selectedItem, index) => {
                  //   handleChange('handleCategory');
                  //   console.log(selectedItem, index);
                  // }}
                  error={errors?.handleCategory}
                  touched={touched?.handleCategory}
                />
              </View>
              <View className="flex flex-col space-y-4">
                <Text
                  style={{
                    color: COLORS.wallet,
                    fontSize: 18,
                    fontWeight: 600,
                    alignItems: 'center',
                  }}>
                  <Icon
                    type={Icons.MaterialCommunityIcons}
                    name="tools"
                    size={18}
                  />{' '}
                  Add Services
                </Text>
                <CustomTextInput
                  placeholder={'Service name'}
                  type="text"
                  value={values?.serviceName}
                  onChangeText={handleChange('serviceName')}
                  error={errors?.serviceName}
                  touched={touched?.serviceName}
                />
                <CustomSelectDropdown
                  data={SERVICE_TYPE}
                  search={''}
                  onSelect={handleChange('serviceType')}
                  // onSelect={(selectedItem, index) => {
                  //   handleChange('handleCategory');
                  //   console.log(selectedItem, index);
                  // }}
                  error={errors?.serviceType}
                  touched={touched?.serviceType}
                />
                <CustomTextInput
                  placeholder={'Service Location'}
                  type="text"
                  value={values?.serviceLocation}
                  onChangeText={handleChange('serviceLocation')}
                  error={errors?.serviceLocation}
                  touched={touched?.serviceLocation}
                />
                <CustomTextInput
                  placeholder={'Service Price'}
                  type="decimal"
                  value={values?.servicePrice}
                  onChangeText={handleChange('servicePrice')}
                  error={errors?.servicePrice}
                  touched={touched?.servicePrice}
                />
                <CustomTextInput
                  placeholder={'Service aDescription'}
                  type="text"
                  value={values?.serviceDescription}
                  onChangeText={handleChange('serviceDescription')}
                  error={errors?.serviceDescription}
                  touched={touched?.serviceDescription}
                  multiline={true}
                  numberOfLines={4}
                />
              </View>
            </ScrollView>
            <View className="w-full">
              <SubmitButton onPress={handleSubmit} name="Done" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScreenWrapper>
  );
};

export default CreateHandle;
