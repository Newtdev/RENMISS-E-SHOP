/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, KeyboardAvoidingView, Platform, View} from 'react-native';
import {Pressable, ScrollView, Text} from 'react-native';
import {SubmitButton} from '../../components/Buttons';
import {DefaultCard} from '../../components/Cards';
import Icon, {Icons} from '../../components/Icons';
import {CustomSelectDropdown, CustomTextInput} from '../../components/Inputs';
import ModalWrapper from '../../components/Modals';
import ScreenWrapper from '../../components/ScreenWrapper';
import {COLORS} from '../../utils/Colors';
import Image1 from '../../assets/images/1.jpeg';
import Image2 from '../../assets/images/2.png';
import Image3 from '../../assets/images/3.jpeg';
import {AddServiceSchema} from '../../yup';
import {useFormik} from 'formik';

const SERVICE_TYPE = ['Mobile', 'Workshop', 'Hybrid'];

const data = {
  user: '64006f236bba90697cde788a',
  coverMedia: {
    media: Image1,
    public_id: 'LnVtujb2SPirytVwrUA3FBlTeKcEGbsu',
  },
  name: 'vickycarwash',
  description:
    'Feel free to hire me to get the best graphics for your brand. I am tested and trusted all over the world.',
  category: '6401fc0dd14d03eae16a3abe',
  status: 'ACTIVE',
  services: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Renmiss Limited',
      description: 'Explore to get the best designer for your work.',
      price: '3500',
      type: 'Workshop',
      location: 'no 12 Sambrerio crescent off limpopo street',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Tratrust Limited',
      description: 'Get all your travelling document easily at your comfort.',
      price: '4000',
      type: 'Mobile',
      location: '',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Bellocare Foundation',
      description: 'Explore to get the best designer for your work.',
      price: '1395',
      type: 'Hybrid',
      location: 'no 12 Sambrerio crescent off limpopo street',
    },
  ],
  ratings: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      avatar: Image1,
      name: 'Renmiss Limited',
      comment: 'Explore to get the best designer for your work.',
      rating: 3.5,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      avatar: Image2,
      name: 'Tratrust Limited',
      comment: 'Excellent',
      rating: 4.0,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      avatar: Image3,
      name: 'Bellocare Foundation',
      comment: 'Explore to get the best designer for your work.',
      rating: 1.5,
    },
  ],
  createdAt: '2023-03-08T10:06:36.456Z',
  updatedAt: '2023-03-08T10:06:36.456Z',
  id: '64085e2c7952876bac28eb39',
};

const EditHandle = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [removeService, setRemoveService] = React.useState(false);
  const [serviceId, setServiceId] = React.useState('');
  const [selectedServiceData, setSelectedServiceData] = React.useState({});

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
      serviceName: '',
      serviceType: '',
      serviceLocation: '',
      serviceDescription: '',
      servicePrice: '',
    },
    validationSchema: AddServiceSchema,
    onSubmit: values => {
      setSubmitting(true);
      //   Pass data to API
      let data = {
        name: values.serviceName,
        price: values.servicePrice,
        description: values.serviceDescription,
        type: values.serviceType,
        location: values.serviceLocation,
      };
      setModalVisible(false);
      resetForm();
      console.log(data);
    },
  });

  const onLongPressCard = id => {
    setRemoveService(true);
    setServiceId(id);
  };

  const handleRemoveService = () => {
    setRemoveService(false);
    // Pass ID to API
    console.log(serviceId);
  };

  const handleEditService = data => {
    setModalVisible(true);
    setSelectedServiceData(data);
    // Pass ID to API
    console.log(selectedServiceData);
  };
  return (
    <>
      <ScreenWrapper>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 80}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={{
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}>
            <ScrollView className="space-y-4">
              <CustomTextInput
                placeholder={'Handle Name'}
                label={'Handel Name:'}
                value={data.name}
                readOnly={true}
              />
              <CustomTextInput
                placeholder={'Category'}
                label={'Handle Category'}
                value={data.category}
                readOnly={true}
              />
              <CustomTextInput
                placeholder={'Handle Description'}
                multiline={true}
                label={'Handle Description'}
                value={data.description}
                readOnly={true}
              />

              {/* Services and review card list */}
              <View>
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

                {data.services?.map((item, i) => {
                  return (
                    <ScrollView key={item.id} className="mt-2">
                      <Pressable onLongPress={() => onLongPressCard(item.id)}>
                        <DefaultCard
                          bgColor={COLORS.white}
                          txColor={COLORS.black}>
                          <View className="flex flex-col justify-between font-bold space-y-3">
                            <View className="flex flex-row justify-between">
                              <Text className="text-lg font-bold">
                                {item.name}
                              </Text>
                              <Pressable
                                onPress={() => handleEditService(item)}>
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
                      </Pressable>
                    </ScrollView>
                  );
                })}
              </View>
            </ScrollView>

            <View className="w-full">
              <SubmitButton name={'Done'} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScreenWrapper>

      {/* Modal to add services */}
      <ModalWrapper
        showModal={modalVisible}
        okElement={
          <Pressable onPress={handleSubmit}>
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
              label={'Service ame'}
              placeholder={'Service name'}
              type="text"
              value={selectedServiceData ? selectedServiceData.name : ''}
              onChangeText={handleChange('serviceName')}
              error={errors?.serviceName}
              touched={touched?.serviceName}
            />
            <CustomSelectDropdown
              data={SERVICE_TYPE}
              label={'Service Type'}
              search={''}
              defaultButtonText={
                selectedServiceData
                  ? selectedServiceData.type
                  : 'Select service type'
              }
              onSelect={handleChange('serviceType')}
              // onSelect={(selectedItem, index) => {
              //   handleChange('handleCategory');
              //   console.log(selectedItem, index);
              // }}
              error={errors?.serviceType}
              touched={touched?.serviceType}
            />
            {selectedServiceData.location ? (
              <CustomTextInput
                label={'Service Location'}
                placeholder={'Service Location'}
                type="text"
                value={selectedServiceData ? selectedServiceData.location : ''}
                onChangeText={handleChange('serviceLocation')}
                error={errors?.serviceLocation}
                touched={touched?.serviceLocation}
              />
            ) : null}
            <CustomTextInput
              label={'Service Price'}
              placeholder={'Service Price'}
              type="numeric"
              value={selectedServiceData ? selectedServiceData.price : ''}
              onChangeText={handleChange('servicePrice')}
              error={errors?.servicePrice}
              touched={touched?.servicePrice}
            />
            <CustomTextInput
              label={'Service Description'}
              placeholder={'Service Description'}
              type="text"
              value={selectedServiceData ? selectedServiceData.description : ''}
              onChangeText={handleChange('serviceDescription')}
              error={errors?.serviceDescription}
              touched={touched?.serviceDescription}
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </View>
      </ModalWrapper>

      {/* Delete Modal*/}
      <ModalWrapper
        showModal={removeService}
        materialCommunityIcon={'trash-can'}
        okElement={
          <Pressable onPress={handleRemoveService}>
            <Text style={{color: COLORS.shop, fontWeight: '500'}}>Remove</Text>
          </Pressable>
        }
        cancelElement={
          <Pressable onPress={() => setRemoveService(false)}>
            <Text style={{color: COLORS.wallet, fontWeight: '500'}}>
              Cancel
            </Text>
          </Pressable>
        }>
        <View className="space-y-5">
          <View>
            <Text className="text-center text-lg">
              Are you sure you want to remove service?
            </Text>
          </View>
        </View>
      </ModalWrapper>
    </>
  );
};

export default EditHandle;
