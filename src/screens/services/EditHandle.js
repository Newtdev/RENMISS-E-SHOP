/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {Pressable, ScrollView, Text} from 'react-native';
import {SubmitButton} from '../../components/Buttons';
import {DefaultCard} from '../../components/Cards';
import Icon, {Icons} from '../../components/Icons';
import {CustomTextInput} from '../../components/Inputs';
import ModalWrapper from '../../components/Modals';
import ScreenWrapper from '../../components/ScreenWrapper';
import {COLORS} from '../../utils/Colors';

const SERVICES_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Renmiss Limited',
    description: 'Explore to get the best designer for your work.',
    price: 3.5,
    type: 'Workshop',
    location: 'no 12 Sambrerio crescent off limpopo street',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Tratrust Limited',
    description: 'Get all your travelling document easily at your comfort.',
    price: 4.0,
    type: 'Mobile',
    location: '',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Bellocare Foundation',
    description: 'Explore to get the best designer for your work.',
    price: 1.5,
    type: 'Hybrid',
    location: 'no 12 Sambrerio crescent off limpopo street',
  },
];

const EditHandle = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

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
              <CustomTextInput placeholder={'Handle Name'} />
              <CustomTextInput placeholder={'Handle Description'} />

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

                {SERVICES_DATA?.map((item, i) => {
                  return (
                    <ScrollView key={item.id} className="mt-2">
                      <DefaultCard
                        bgColor={COLORS.white}
                        txColor={COLORS.black}>
                        <View className="flex flex-col justify-between font-bold space-y-3">
                          <View className="flex flex-row justify-between">
                            <Text className="text-lg font-bold">
                              {item.title}
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
              <SubmitButton name={'Done'} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScreenWrapper>

      <ModalWrapper
        showModal={modalVisible}
        okElement={
          <Pressable>
            <Text style={{color: COLORS.wallet, fontWeight: '500'}}>Save</Text>
          </Pressable>
        }
        cancelElement={
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={{color: COLORS.shop, fontWeight: '500'}}>Cancel</Text>
          </Pressable>
        }>
        <View className="space-y-5">
          <View className="flex flex-col space-y-4">
            <CustomTextInput placeholder={'Service name'} />
            <CustomTextInput placeholder={'Service Type'} />
            <CustomTextInput placeholder={'Service Location'} />
            <CustomTextInput placeholder={'Price'} />
            <CustomTextInput
              placeholder={'Description'}
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </View>
      </ModalWrapper>
    </>
  );
};

export default EditHandle;
