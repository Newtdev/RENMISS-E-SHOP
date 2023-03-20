/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Pressable, RefreshControl, Text, View} from 'react-native';
// import ServicesCategoryCard from '../../components/ServicesCategoryCard';
import banner from '../../assets/eight.png';
import ScreenWrapper from '../../components/ScreenWrapper';
import CardWrapper from '../../components/Cards';
import {SearchInput} from '../../components/Inputs';
import Icon, {Icons} from '../../components/Icons';
import {COLORS} from '../../utils/Colors';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Web Design',
    image: banner,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Mobile App Development',
    image: banner,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Fashion Design',
    image: banner,
  },
];

const ServicesCategory = ({navigation}) => {
  const [searchVisible, setSearchVisible] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <>
      <ScreenWrapper>
        <View className="flex flex-row justify-between">
          <Text className="my-2">Choose Category</Text>
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
          data={data}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({item}) => (
            <CardWrapper banner={item.image}>
              <Pressable
                onPress={() => navigation.navigate('ServiceProviders')}
                className="flex flex-1">
                <View
                  style={{
                    backgroundColor: COLORS.darkOverlayColor,
                    borderRadius: 10,
                    padding: 6,
                  }}>
                  <Text className="text-md text-white font-bold">
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            </CardWrapper>
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
        />
        {/* <ServicesCategoryCard
          name={'Web Design'}
          description={'Explore to get the best designer for work.'}
          banner={banner}
        /> */}
      </ScreenWrapper>
    </>
  );
};

export default ServicesCategory;
