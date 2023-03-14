/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {DefaultCard} from '../../components/Cards';
import ScreenWrapper from '../../components/ScreenWrapper';
import Image1 from '../../assets/images/1.jpeg';
import Image2 from '../../assets/images/2.png';
import Image3 from '../../assets/images/3.jpeg';
import {COLORS} from '../../utils/Colors';
import Icon, {Icons} from '../../components/Icons';
import {IconButton} from 'react-native-paper';
import RatingStars from '../../components/Rating';
import AccordionSection from '../../components/Accordions';
import ModalWrapper from '../../components/Modals';
import {TextField} from '../../components/Inputs';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: Image1,
    name: 'Renmiss Limited',
    review: 'Explore to get the best designer for your work.',
    rating: 3.5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: Image2,
    name: 'Tratrust Limited',
    review: 'Get all your travelling document easily at your comfort.',
    rating: 4.0,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: Image3,
    name: 'Bellocare Foundation',
    review: 'Explore to get the best designer for your work.',
    rating: 1.5,
  },
];
const SERVICES_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Renmiss Limited',
    description: 'Explore to get the best designer for your work.',
    price: 3.5,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Tratrust Limited',
    description: 'Get all your travelling document easily at your comfort.',
    price: 4.0,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Bellocare Foundation',
    description: 'Explore to get the best designer for your work.',
    price: 1.5,
  },
];

const ServiceProviderDetails = ({navigation}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const handleModal = () => setModalVisible(true);

  return (
    <>
      <ScreenWrapper>
        <ScrollView>
          <View style={{flexDirection: 'column', gap: 10}}>
            {/* Profile card */}
            <DefaultCard bgColor={COLORS.black} txColor={COLORS.white}>
              <View className="flex-none flex-row space-x-4 w-full">
                <View className="flex-none">
                  <Image
                    source={Image1}
                    className="rounded-full border-2 border-green-700 h-20 w-20"
                  />
                </View>
                <View className="flex-initial space-y-4 justify-center">
                  <View className="flex-row space-x-1 items-center">
                    <Text className="text-white text-xl text-center">
                      Automobile Diagnostic Center &nbsp;
                      <Icon
                        type={Icons.Ionicons}
                        name="shield-checkmark"
                        color={COLORS.social}
                        size={25}
                      />
                    </Text>
                  </View>
                  {/* <View className="flex flex-row w-full">
                    <Icon
                      type={Icons.MaterialIcons}
                      name="email"
                      color={COLORS.white}
                      size={16}
                    />
                    <Text className="text-xs font-bold text-white">
                      {'hassanabubakar@renmiss.ng'}
                    </Text>
                  </View>
                  <View className="flex flex-row space-x-2 w-full">
                    <Icon
                      type={Icons.MaterialIcons}
                      name="phone"
                      color={COLORS.white}
                      size={16}
                    />
                    <Text className="text-xs font-bold text-white">
                      {'08068033360'}
                    </Text>
                  </View> */}
                </View>
              </View>

              <View className="flex-initial flex-col space-y-4 mt-3">
                <View className="flex-row space-x-2">
                  <View className="flex-none">
                    <Icon
                      type={Icons.MaterialIcons}
                      name="book"
                      color={COLORS.white}
                      size={20}
                    />
                  </View>
                  <View className="flex-initial">
                    <Text className="text-sm font-bold text-white text-justify tracking-tighter">
                      {
                        'Feel free to hire me to get the best graphics for your brand. I am tested and trusted all over the world.'
                      }
                    </Text>
                  </View>
                </View>
                <View className="flex-row space-x-2">
                  <Text className="text-sm font-bold text-white">{'3.0'}</Text>
                  <RatingStars size={12} defaultRating={3} isDisabled={true} />
                </View>
              </View>
            </DefaultCard>

            {/* Hire, Rate and Terms card */}
            <DefaultCard bgColor={COLORS.white} txColor={COLORS.black}>
              <View className="flex flex-row justify-around">
                <View className="flex items-center">
                  <IconButton
                    icon="room-service-outline"
                    iconColor={COLORS.white}
                    mode="contained-tonal"
                    containerColor={COLORS.wallet}
                    size={30}
                    onPress={() => console.log('Pressed')}
                  />
                  <Text>Hire</Text>
                </View>
                <View className="flex items-center">
                  <IconButton
                    icon="star-outline"
                    iconColor={COLORS.white}
                    mode="contained-tonal"
                    containerColor={COLORS.shop}
                    size={30}
                    onPress={() => setModalVisible(true)}
                  />
                  <Text>Rate</Text>
                </View>
                <View className="flex items-center">
                  <IconButton
                    icon="book-multiple"
                    iconColor={COLORS.white}
                    mode="contained-tonal"
                    containerColor={COLORS.social}
                    size={30}
                    onPress={() => console.log('Pressed')}
                  />
                  <Text>Terms of use</Text>
                </View>
              </View>
            </DefaultCard>

            {/* Services and review card list */}
            <AccordionSection
              data={[
                {
                  title: 'My services',
                  icon: 'tools',
                  element: (
                    <>
                      {SERVICES_DATA?.map((item, i) => {
                        return (
                          <ScrollView key={item.id} className="mt-2">
                            <DefaultCard
                              bgColor={COLORS.white}
                              txColor={COLORS.black}>
                              <View className="flex flex-col justify-between font-bold space-y-3">
                                <Text className="text-lg font-bold">
                                  {item.title}
                                </Text>
                                <Text className="text-md">
                                  {item.description}
                                </Text>
                                <Text
                                  className="text-lg font-bold"
                                  style={{color: COLORS.wallet}}>
                                  Price : {item.price}
                                </Text>
                              </View>
                            </DefaultCard>
                          </ScrollView>
                        );
                      })}
                    </>
                  ),
                },
                {
                  title: 'Ratings and Review',
                  icon: 'star',
                  element: (
                    <ScrollView>
                      {DATA?.map((item, i) => {
                        return (
                          <View key={item.id} className="mt-2">
                            <DefaultCard
                              bgColor={COLORS.white}
                              txColor={COLORS.black}>
                              <View className="flex flex-row space-x-3">
                                <View className="flex-none">
                                  <Image
                                    source={Image1}
                                    className="rounded-full border border-blue-900 h-8 w-8"
                                  />
                                </View>
                                <View className="flex-initial flex-col justify-between font-bold space-y-1">
                                  <Text className="text-lg font-semibold">
                                    {item.name}
                                  </Text>
                                  <Text className="text-md text-justify tracking-tighter">
                                    {item.review}
                                  </Text>
                                  <Text
                                    className="text-sm font-bold"
                                    style={{color: COLORS.wallet}}>
                                    {item.rating}
                                    <RatingStars
                                      size={12}
                                      defaultRating={item.rating}
                                      isDisabled={true}
                                    />
                                  </Text>
                                </View>
                              </View>
                            </DefaultCard>
                          </View>
                        );
                      })}
                    </ScrollView>
                  ),
                },
              ]}
            />
          </View>
        </ScrollView>
      </ScreenWrapper>

      <ModalWrapper
        showModal={modalVisible}
        materialCommunityIcon={''}
        okElement={
          <Pressable>
            <Text style={{color: COLORS.wallet, fontWeight: '500'}}>Post</Text>
          </Pressable>
        }
        cancelElement={
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={{color: COLORS.shop, fontWeight: '500'}}>Cancel</Text>
          </Pressable>
        }>
        <View className="space-y-5">
          <View>
            <RatingStars size={25} isDisabled={false} />
          </View>
          <View>
            <Text className=" text-center">
              Please rate and review this product and recommend it to othe
              users.
            </Text>
          </View>
          <View>
            <TextField placeholder={'Add a review'} />
          </View>
        </View>
      </ModalWrapper>
    </>
  );
};

export default ServiceProviderDetails;
