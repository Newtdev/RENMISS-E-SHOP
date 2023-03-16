/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useFormik} from 'formik';
import {nanoid} from 'nanoid';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {SubmitButton} from '../../components/Buttons';
import Icon, {Icons} from '../../components/Icons';
import {CustomSelectDropdown, CustomTextInput} from '../../components/Inputs';
import ScreenWrapper from '../../components/ScreenWrapper';
import {COLORS} from '../../utils/Colors';
import {CreateHandleSchema} from '../../yup';
import ImageCropPicker from 'react-native-image-crop-picker';
import Upload from '../../assets/upload.png';
import {DefaultCard} from '../../components/Cards';
import ModalWrapper from '../../components/Modals';

// const SERVICES_DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Renmiss Limited',
//     description: 'Explore to get the best designer for your work.',
//     price: 3.5,
//     type: 'Workshop',
//     location: 'no 12 Sambrerio crescent off limpopo street',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Tratrust Limited',
//     description: 'Get all your travelling document easily at your comfort.',
//     price: 4.0,
//     type: 'Mobile',
//     location: '',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Bellocare Foundation',
//     description: 'Explore to get the best designer for your work.',
//     price: 1.5,
//     type: 'Hybrid',
//     location: 'no 12 Sambrerio crescent off limpopo street',
//   },
// ];

const SERVICES_DATA = [];

const CreateHandle = () => {
  //   const dispatch = useDispatch();
  //   const showModal = useSelector(show);
  //   const loading = useSelector(request);

  const [modalVisible, setModalVisible] = React.useState(false);
  const categoryList = [];
  const categorys = [
    {
      name: 'Web design',
      createdAt: '2023-03-03T13:54:21.655Z',
      updatedAt: '2023-03-03T13:54:21.655Z',
      id: '6401fc0dd14d03eae16a3abe1',
    },
    {
      name: 'Plumbing Service',
      createdAt: '2023-03-03T13:54:21.655Z',
      updatedAt: '2023-03-03T13:54:21.655Z',
      id: '6401fc0dd14d03eae16a3abe2',
    },
    {
      name: 'Automobile Service',
      createdAt: '2023-03-03T13:54:21.655Z',
      updatedAt: '2023-03-03T13:54:21.655Z',
      id: '6401fc0dd14d03eae16a3abe',
    },
  ];
  categorys.map((item, i) => {
    categoryList.push(item.name);
  });

  const SERVICE_TYPE = ['Mobile', 'Workshop', 'Hybrid'];

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

      const handleObject = {
        name: values.handleName,
        description: values.handleDescription,
        category: values.handleCategory,
        services: SERVICES_DATA,
      };

      console.log(handleObject);
    },
  });

  const addService = () => {
    console.log('Clicked');
    alert(JSON.stringify(values, null, 2));

    let data = {
      name: values.serviceName,
      price: values.servicePrice,
      description: values.serviceDescription,
      type: values.serviceType,
      location: values.serviceLocation,
    };
    SERVICES_DATA.push(data);
    console.log(SERVICES_DATA);
    setModalVisible(false);
    setFieldValue({
      serviceName: '',
      serviceType: '',
      serviceLocation: '',
      serviceDescription: '',
      servicePrice: '',
    });
  };

  const handleChoosePhoto = () => {
    ImageCropPicker.openPicker({
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
    <>
      <ScreenWrapper>
        <SafeAreaView>
          <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 50}
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
                {/* Handle Details */}
                <View>
                  <View className="mx-auto my-3 ">
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
                        Add Handle Image
                      </Text>
                    </Pressable>
                  </View>

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
                    data={categoryList}
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

                {/* Services and review card list */}
                <View className="mt-4">
                  <View className="flex flex-row w-full  justify-between">
                    <View className="flex flex-row items-center">
                      <Icon
                        type={Icons.MaterialCommunityIcons}
                        name="tools"
                        size={22}
                      />
                      <Text className="text-lg">My Services</Text>
                    </View>
                    <Pressable
                      onPress={() => setModalVisible(true)}
                      className="flex flex-row items-center">
                      <Icon
                        type={Icons.MaterialCommunityIcons}
                        name="plus"
                        size={22}
                      />
                      <Text className="text-lg">Add</Text>
                    </Pressable>
                  </View>

                  {SERVICES_DATA?.map((item, i) => {
                    return (
                      <ScrollView key={item.id} className="mt-2">
                        <DefaultCard
                          bgColor={COLORS.white}
                          txColor={COLORS.black}>
                          <View className="flex flex-col justify-between font-bold space-y-3">
                            <View className="flex flex-row justify-between">
                              <Text className="text-lg font-bold">
                                {item.name}
                              </Text>
                              <Pressable onPress={() => setModalVisible(true)}>
                                <Icon
                                  type={Icons.MaterialCommunityIcons}
                                  name="pencil"
                                  size={20}
                                />
                              </Pressable>
                            </View>
                            <Text className="text-md">{item.description}</Text>

                            <View className="flex flex-row">
                              <Text
                                className="flex-none text-md font-bold"
                                style={{color: COLORS.wallet}}>
                                Service Type :
                              </Text>
                              <Text className="flex-initial ml-2 text-md font-bold break-words">
                                {item.type}
                              </Text>
                            </View>
                            <View className="flex flex-row">
                              <Text
                                className="flex-none text-md font-bold"
                                style={{color: COLORS.wallet}}>
                                Price :
                              </Text>
                              <Text className="flex-initial ml-2 text-md font-bold break-words">
                                {item.price}
                              </Text>
                            </View>
                            {item.location ? (
                              <View className="flex flex-row">
                                <Text
                                  className="flex-none text-md font-bold"
                                  style={{color: COLORS.wallet}}>
                                  Location :
                                </Text>
                                <Text className="flex-initial ml-2 text-md font-bold break-words">
                                  {item.location}
                                </Text>
                              </View>
                            ) : null}
                          </View>
                        </DefaultCard>
                      </ScrollView>
                    );
                  })}
                </View>
              </ScrollView>
              <View className="w-full">
                <SubmitButton onPress={handleSubmit} name="Done" />
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScreenWrapper>

      <ModalWrapper
        showModal={modalVisible}
        okElement={
          <Pressable onPress={addService}>
            <Text style={{color: COLORS.wallet, fontWeight: '500'}}>Add</Text>
          </Pressable>
        }
        cancelElement={
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={{color: COLORS.shop, fontWeight: '500'}}>Cancel</Text>
          </Pressable>
        }>
        <View className="space-y-5">
          <View className="flex flex-col space-y-4">
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
        </View>
      </ModalWrapper>
    </>
  );
};

export default CreateHandle;
