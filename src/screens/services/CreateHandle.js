/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useFormik} from 'formik';
import {nanoid} from 'nanoid';
import {
  Alert,
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
import CustomSnackbar from '../../components/Snackbar';

const SERVICE_TYPE = ['Mobile', 'Workshop', 'Hybrid'];

const CreateHandle = () => {
  //   const dispatch = useDispatch();
  //   const showModal = useSelector(show);
  //   const loading = useSelector(request);

  const [serviceData, setServiceData] = React.useState([]);
  const [serviceCategory, setServiceCategory] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const onDismissSnackBar = () => setSnackbarVisible(false);
  const [createHandle, setCreateHandle] = React.useState(false);
  const [addServices, setAddServices] = React.useState(false);

  React.useEffect(() => {
    const categories = [
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
    categories.map((item, i) => {
      setServiceCategory(current => [...current, item.name]);
    });
  }, []);

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
    resetForm,
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
      //   console.log({...values, idempotentKey: nanoid(32)});
      switch (true) {
        case addServices:
          let data = {
            id: nanoid(32),
            name: values.serviceName,
            price: values.servicePrice,
            description: values.serviceDescription,
            type: values.serviceType,
            location: values.serviceLocation,
          };

          setServiceData([...serviceData, data]);
          setModalVisible(false);
          resetFormData();

          console.log(serviceData);
          break;
        case createHandle:
          //   Pass handleObject to the API
          const handleObject = {
            coverMedia: values.handleImage,
            name: values.handleName,
            description: values.handleDescription,
            category: values.handleCategory,
            services: serviceData,
          };
          setModalVisible(false);
          setSnackbarVisible(true);
          setSnackbarMessage('Handle Created Successfully!');
          resetFormData();
          break;
        default:
          break;
      }
    },
  });

  const resetFormData = () => {
    resetForm({
      values: {
        handleName: values.handleName,
        handleDescription: values.handleDescription,
        workExperience: values.workExperience,
        handleCategory: values.handleCategory,
        serviceName: ' ',
        serviceType: ' ',
        serviceLocation: ' ',
        serviceDescription: ' ',
        servicePrice: ' ',
      },
    });
  };

  const addService = () => {
    setAddServices(true);
    setCreateHandle(false);
    handleSubmit();
  };

  const handleCreate = () => {
    if (
      values.handleName &&
      values.handleCategory &&
      values.handleDescription &&
      values.workExperience &&
      serviceData.length === 0
    ) {
      Alert.alert(
        'You cannot create an handle without adding at least one service',
      );
    } else {
      setAddServices(false);
      setCreateHandle(true);
      handleSubmit();
    }
  };

  const removeService = i => {
    resetFormData();
    let serviceD = serviceData?.filter((item, index) => {
      return index !== i;
    });
    setServiceData(serviceD);
  };

  const handleChoosePhoto = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setFieldValue('handleImage', image.sourceURL);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <ScreenWrapper>
        <SafeAreaView>
          <CustomSnackbar
            visible={snackbarVisible}
            onDismissSnackBar={onDismissSnackBar}
            message={snackbarMessage}
            action={{
              label: 'Done',
              onPress: () => {
                onDismissSnackBar;
              },
            }}
          />
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
                      className={
                        errors.handleImage
                          ? 'relative h-32 w-32 bg-white rounded-full items-center justify-center p-2 border border-red-800'
                          : 'relative h-32 w-32 bg-white rounded-full items-center justify-center p-2'
                      }
                      onPress={handleChoosePhoto}>
                      {!values?.handleImage ? (
                        <>
                          <Image source={Upload} resizeMode="cover" />
                          <Text className="text-[10px] mt-2 font-bold">
                            Add Handle Image
                          </Text>
                          <View className="absolute bottom-1 right-2 bg-slate-300 rounded-full">
                            <Icon
                              type={Icons.MaterialCommunityIcons}
                              name="plus"
                            />
                          </View>
                        </>
                      ) : (
                        <Image
                          source={{
                            uri: `${values?.handleImage}`,
                          }}
                          className=" h-32 w-32 rounded-full"
                          resizeMode="cover"
                        />
                      )}
                    </Pressable>
                  </View>

                  <CustomTextInput
                    placeholder={'Handle Name'}
                    type="text"
                    onChangeText={handleChange('handleName')}
                    error={errors?.handleName}
                    touched={touched?.handleName}
                    autoFocus={true}
                  />
                  <CustomTextInput
                    placeholder={'Handler Working Experience'}
                    type="text"
                    onChangeText={handleChange('workExperience')}
                    error={errors?.workExperience}
                    touched={touched?.workExperience}
                  />
                  <CustomSelectDropdown
                    data={serviceCategory}
                    search={true}
                    onSelect={handleChange('handleCategory')}
                    defaultButtonText={'Select category'}
                    // onSelect={(selectedItem, index) => {
                    //   handleChange('handleCategory');
                    //   console.log(selectedItem, index);
                    // }}
                    error={errors?.handleCategory}
                    touched={touched?.handleCategory}
                  />
                  <CustomTextInput
                    placeholder={'Handle Description'}
                    type="text"
                    onChangeText={handleChange('handleDescription')}
                    error={errors?.handleDescription}
                    touched={touched?.handleDescription}
                    multiline={true}
                    maxLength={50}
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

                  {serviceData?.map((item, i) => {
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
                              <Pressable onPress={() => removeService(i)}>
                                <Icon
                                  type={Icons.MaterialCommunityIcons}
                                  name="close"
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
                <SubmitButton onPress={handleCreate} name="Create" />
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScreenWrapper>

      {/* Modal to add services */}
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
              onChangeText={handleChange('serviceName')}
              error={errors?.serviceName}
              touched={touched?.serviceName}
            />
            <CustomSelectDropdown
              data={SERVICE_TYPE}
              search={''}
              defaultButtonText={'Select service type'}
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
              onChangeText={handleChange('serviceLocation')}
              error={errors?.serviceLocation}
              touched={touched?.serviceLocation}
            />
            <CustomTextInput
              placeholder={'Service Price'}
              type="decimal"
              onChangeText={handleChange('servicePrice')}
              error={errors?.servicePrice}
              touched={touched?.servicePrice}
            />
            <CustomTextInput
              placeholder={'Service Description'}
              type="text"
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
