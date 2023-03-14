/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import {FlatList, View} from 'react-native';
import CardWrapper from '../../components/Cards';
import Image1 from '../../assets/images/1.jpeg';
import Image2 from '../../assets/images/2.png';
import Image3 from '../../assets/images/3.jpeg';
import ScreenWrapper from '../../components/ScreenWrapper';
import {COLORS} from '../../utils/Colors';
import Icon, {Icons} from '../../components/Icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    username: '@Design',
    job: 'Graphics Design',
    description: 'Feel free to hire me to get the best graphics for brand.',
    image: Image1,
    badge: 'Verified',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    username: '@Web',
    job: 'Web Design',
    description:
      'Hire me for a beautifull, standard and resposive website designs.',
    image: Image2,
    badge: 'Verified',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    username: '@Fashion',
    job: 'Fashion Design',
    description: 'I am the best fashinister that ever exist.',
    image: Image3,
    badge: 'Verified',
  },
];

const ServiceProviders = ({navigation}) => {
  return (
    <ScreenWrapper>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <CardWrapper key={item.id}>
            <Pressable
              onPress={() => navigation.navigate('ServiceProviderDetails')}
              className="flex flex-1">
              <View className="flex flex-1 items-center text-black space-y-2">
                <Image
                  source={Image1}
                  className="rounded-full border border-blue-900 h-20 w-20"
                />
                <Text className="font-bold">{item.username}</Text>
                <Text className="text-xs">{item.description}</Text>
                <View className="flex flex-row bottom-0 absolute w-full">
                  <Icon
                    type={Icons.MaterialIcons}
                    name="verified"
                    color={COLORS.wallet}
                    size={16}
                  />
                  <Text className="text-xs font-bold">{item.badge}</Text>
                </View>
              </View>
            </Pressable>
          </CardWrapper>
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
