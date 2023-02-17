import {Fragment, useState} from 'react';
import {Image, ImageBackground, Pressable} from 'react-native';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {NavigationHeaderWapper, ScreenWrapper} from '../../sharedcomponent';
import Images from '../../assets/shopImage.png';
import BgFour from '../../assets/five.jpg';
import Mail from '../../assets/mail.svg';
import Phone from '../../assets/phone.svg';
import Location from '../../assets/location.svg';
import User from '../../assets/user.svg';
import ProductImage from '../../assets/productImage.png';
import currency from 'currency.js';
import {useWindowDimensions} from 'react-native';
import {productList} from '../../lib';

const ShopImageHeader = () => {
  return (
    <ImageBackground
      source={Images}
      resizeMode="cover"
      className="h-[128px] w-full  mt-2 flex flex-row items-center">
      <View
        className="w-[87.11px]
h-[91px] rounded-full bg-red-100 ml-2 overflow-hidden">
        <Image className="w-full h-full" source={BgFour}></Image>
      </View>
    </ImageBackground>
  );
};

const ShopInformation = () => {
  const data = [
    {id: 1, name: 'emmyjay233@gmail.com', icon: <Mail />},
    {id: 2, name: '08124085839', icon: <Phone />},
    {id: 3, name: 'No 12 kenzo plaza banex, wuse 2, Abuja', icon: <Location />},
    {id: 4, name: 'Following', icon: <User />},
  ];
  return (
    <View className="bg-red-900 h-[187px] px-6 py-4 bg-white">
      <View>
        <Text className="text-[20px] font-[500]">Block A shop 1</Text>
        <Text className="text-[20px] font-[500]">cosmetic shop</Text>
      </View>
      <View className="my-1 ">
        {data?.map((info, i) => {
          return (
            <View className="flex flex-row items-center" key={info.id}>
              <View className="my-2 mr-2">{info?.icon}</View>
              <Text className="text-[14px]">{info.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export const ProductCard = ({navigate}) => {
  const {width} = useWindowDimensions();
  const cardWidth = Math.round(width / 2.15);
  return (
    <View className="px-2 mt-2 flex flex-row flex-wrap items-center justify-between">
      {productList?.myItems?.results?.map((product, i) => {
        return (
          <Pressable
            onPress={() => {
              navigate('Product');
            }}
            key={product?.id}
            className="h-[204px] rounded-[10px] bg-white my-1.5 overflow-x-hidden"
            style={{width: cardWidth}}>
            <Image
              source={ProductImage}
              resizeMode="contain"
              className="w-[150.95px]
h-[141.33px]  mx-auto mt-1"
            />
            <View className=" pl-3 flex flex-col pt-0.5">
              <Text className="text-[11px] capitalize">{product?.name}</Text>

              <Text className="text-[12px] font-bold mt-1">
                {currency(32000, {symbol: 'N'}).format()}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const ShopDetails = ({navigation}) => {
  return (
    <ScreenWrapper
      content={<NavigationHeaderWapper name="Shop" back={navigation.goBack} />}>
      <ScrollView>
        <ShopImageHeader />
        <ShopInformation />
        <ProductCard {...navigation} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default ShopDetails;
