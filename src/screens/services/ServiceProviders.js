/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, RefreshControl, StyleSheet, Text} from 'react-native';
import {FlatList, View} from 'react-native';
import CardWrapper, {ServiceProviderCard} from '../../components/Cards';
import Image1 from '../../assets/images/1.jpeg';
import Image2 from '../../assets/images/2.png';
import Image3 from '../../assets/images/3.jpeg';
import ScreenWrapper from '../../components/ScreenWrapper';
import {COLORS} from '../../utils/Colors';
import Icon, {Icons} from '../../components/Icons';
import RatingStars from '../../components/Rating';
import {SearchInput} from '../../components/Inputs';

const data = {
  data: [
    {
      user: '63ee88e83f3c6cd56d596913',
      coverMedia: {
        media: Image1,
        public_id: 'LnVtujb2SPirytVwrUA3FBlTeKcEGbsu',
      },
      name: 'thebahdman',
      description: 'this is a bahdman service',
      category: '6401fc0dd14d03eae16a3abe',
      status: 'ACTIVE',
      services: [
        {
          name: 'testing service',
          price: 1000,
          description: 'testing service description',
          _id: '6405b5bed50388e84e0b7783',
        },
      ],
      ratings: [],
      createdAt: '2023-03-03T13:57:32.540Z',
      updatedAt: '2023-03-06T09:43:26.171Z',
      id: '6401fcccd14d03eae16a3acsa',
    },
    {
      user: '63ee88e83f3c6cd56d5969133',
      coverMedia: {
        media: Image2,
        public_id: 'LnVtujb2SPirytVwrUA3FBlTeKcEGbsu',
      },
      name: 'PamVick',
      description: 'Deals with all kinds of services',
      category: '6401fc0dd14d03eae16a3abe',
      status: 'ACTIVE',
      services: [
        {
          name: 'testing service',
          price: 1000,
          description: 'testing service description',
          _id: '6405b5bed50388e84e0b7783',
        },
      ],
      ratings: [],
      createdAt: '2023-03-03T13:57:32.540Z',
      updatedAt: '2023-03-06T09:43:26.171Z',
      id: '6401fcccd14d03eae16a3aaca',
    },
    {
      user: '63ee88e83f3c6cd56d5969143',
      coverMedia: {
        media: Image3,
        public_id: 'LnVtujb2SPirytVwrUA3FBlTeKcEGbsu',
      },
      name: 'Plumbing Services',
      description: 'Get your plumbing work done in a jiffy',
      category: '6401fc0dd14d03eae16a3abe',
      status: 'ACTIVE',
      services: [
        {
          name: 'testing service',
          price: 1000,
          description: 'testing service description',
          _id: '6405b5bed50388e84e0b7783',
        },
      ],
      ratings: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          avatar: Image1,
          name: 'Renmiss Limited',
          comment: 'Explore to get the best designer for your work.',
          rating: 3,
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          avatar: Image2,
          name: 'Tratrust Limited',
          comment: 'Excellent',
          rating: 4,
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          avatar: Image3,
          name: 'Bellocare Foundation',
          comment: 'Explore to get the best designer for your work.',
          rating: 1,
        },
      ],
      createdAt: '2023-03-03T13:57:32.540Z',
      updatedAt: '2023-03-06T09:43:26.171Z',
      id: '6401fcccd14d03eae16ya3aca',
    },
  ],
  page: 1,
  limit: 10,
  totalPages: 1,
  totalData: 1,
};

const styles = StyleSheet.create({
  serviceHandleImage: {
    borderColor: COLORS.wallet,
    borderRadius: 50,
    borderWidth: 2,
    height: 90,
    width: 90,
  },
});

const ServiceProviders = ({navigation}) => {
  const [searchVisible, setSearchVisible] = React.useState(false);

  function ratingCompleted(rating) {
    console.log('Rating in the main is: ' + rating);
  }
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScreenWrapper>
      <View className="flex flex-row justify-between">
        <Text className="my-2">Choose Artisan</Text>
        <Pressable onPress={() => setSearchVisible(!searchVisible)}>
          <Icon
            type={Icons.FontAwesome}
            name="search"
            color={COLORS.black}
            size={25}
          />
        </Pressable>
      </View>
      {searchVisible ? <SearchInput placeholder="Search Category" /> : null}
      <FlatList
        data={data.data}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item}) => (
          <ServiceProviderCard>
            <Pressable
              onPress={() => navigation.navigate('ServiceProviderDetails')}>
              <View className="flex flex-col justify-between h-full">
                <View className="flex-1 items-center text-black space-y-2">
                  <Image
                    source={item.coverMedia.media}
                    style={styles.serviceHandleImage}
                  />
                  <Text className="font-bold capitalize">
                    {item.name}&nbsp;
                    <Icon
                      type={Icons.Ionicons}
                      name="shield-checkmark"
                      color={COLORS.servicebadge}
                      size={16}
                    />
                  </Text>
                  <Text className="text-xs normal-case">
                    {item.description}
                  </Text>
                </View>
                <View className="flex-2 flex-row text-start">
                  <Text className="text-sm font-bold text-black">{'3.0'}</Text>
                  <RatingStars
                    size={12}
                    defaultRating={3}
                    isDisabled={true}
                    ratingComplete={ratingCompleted}
                  />
                </View>
              </View>
            </Pressable>
          </ServiceProviderCard>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      />
    </ScreenWrapper>
  );
};

export default ServiceProviders;
