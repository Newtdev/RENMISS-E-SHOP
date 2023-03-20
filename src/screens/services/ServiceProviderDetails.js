/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
import {CustomTextInput} from '../../components/Inputs';
import {ModalWrapper} from '../../components/Modals';
import {useFormik} from 'formik';

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
      price: 3500,
      type: 'Workshop',
      location: 'no 12 Sambrerio crescent off limpopo street',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Tratrust Limited',
      description: 'Get all your travelling document easily at your comfort.',
      price: 4000,
      type: 'Mobile',
      location: '',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Bellocare Foundation',
      description: 'Explore to get the best designer for your work.',
      price: 1395,
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

const styles = StyleSheet.create({
  serviceHandleImageContainer: {
    borderTopColor: COLORS.social,
    borderBottomColor: COLORS.shop,
    borderLeftColor: COLORS.wallet,
    borderRightColor: COLORS.wallet,
    borderRadius: 50,
    borderWidth: 10,
    height: 95,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceHandleImage: {
    // borderColor: COLORS.social,
    borderRadius: 50,
    borderWidth: 2,
    height: 90,
    width: 90,
  },
});

const ServiceProviderDetails = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [ratings, setRating] = React.useState();
  const [comment, setComment] = React.useState();

  const {handleChange, handleSubmit, setSubmitting} = useFormik({
    initialValues: {
      ratingComment: '',
    },
    onSubmit: values => {
      setSubmitting(true);
      //   dispatch(active());

      //   Pass handleRatingObject to API data
      const handleRatingObject = {
        rating: ratings,
        comment: values.ratingComment ? values.ratingComment : comment,
      };

      console.log(handleRatingObject);
    },
  });

  const ratingCount = rating => {
    setRating(rating);
    switch (rating) {
      case 1:
        setComment('Fear');
        break;
      case 2:
        setComment('Poor');
        break;
      case 3:
        setComment('Good');
        break;
      case 4:
        setComment('Very Good');
        break;
      case 5:
        setComment('Excellent');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ScreenWrapper>
        <ScrollView>
          <View style={{flexDirection: 'column', gap: 10}}>
            {/* Profile card */}
            <DefaultCard bgColor={COLORS.black} txColor={COLORS.white}>
              <View className="flex-none flex-row space-x-4 w-full">
                <View
                  className="flex-none"
                  style={styles.serviceHandleImageContainer}>
                  <Image
                    source={data?.coverMedia.media}
                    style={styles.serviceHandleImage}
                  />
                </View>
                <View className="flex-initial space-y-4 justify-center">
                  <View className="flex-row space-x-1 items-center">
                    <Text className="text-white text-xl text-center capitalize">
                      {data?.name} &nbsp;
                      <Icon
                        type={Icons.Ionicons}
                        name="shield-checkmark"
                        color={COLORS.servicebadge}
                        size={25}
                      />
                    </Text>
                  </View>
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
                    <Text className="text-sm font-bold text-white text-justify tracking-tighter normal-case">
                      {data?.description}
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
                      {data?.services?.map((item, i) => {
                        return (
                          <ScrollView key={item.id} className="my-1">
                            <DefaultCard
                              bgColor={COLORS.white}
                              txColor={COLORS.black}>
                              <View className="flex flex-col justify-between font-bold space-y-3">
                                <Text className="text-lg font-bold">
                                  {item.name}
                                </Text>
                                <Text className="text-md">
                                  {item.description}
                                </Text>
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
                    </>
                  ),
                },
                {
                  title: 'Ratings and Review',
                  icon: 'star',
                  element: (
                    <View>
                      {data?.ratings?.map((item, i) => {
                        return (
                          <View key={item.id} className="mt-2">
                            <DefaultCard
                              bgColor={COLORS.white}
                              txColor={COLORS.black}>
                              <View className="flex flex-row space-x-3">
                                <View className="flex-none">
                                  <Image
                                    source={item.avatar}
                                    style={{
                                      borderWidth: 1,
                                      borderColor: COLORS.wallet,
                                      borderRadius: 50,
                                      height: 30,
                                      width: 30,
                                    }}
                                  />
                                </View>
                                <View className="flex-initial flex-col justify-between font-bold space-y-1">
                                  <Text className="text-lg font-semibold">
                                    {item.name}
                                  </Text>
                                  <Text className="text-md text-justify tracking-tighter">
                                    {item.comment}
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
                    </View>
                  ),
                },
              ]}
            />
          </View>
        </ScrollView>
      </ScreenWrapper>

      {/* Rating Modal */}
      <ModalWrapper
        showModal={modalVisible}
        okElement={
          <Pressable onPress={handleSubmit}>
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
            <RatingStars
              size={25}
              isDisabled={false}
              ratingCount={ratingCount}
            />
          </View>
          <View>
            <Text className="text-center">
              Please rate and add a review to this handle, also don't forget to
              recommend others.
            </Text>
          </View>
          <View>
            <CustomTextInput
              placeholder={'Add a review'}
              type="text"
              onChangeText={handleChange('ratingComment')}
            />
          </View>
        </View>
      </ModalWrapper>
    </>
  );
};

export default ServiceProviderDetails;
