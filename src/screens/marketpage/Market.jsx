import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  ImageBackground,
  Pressable,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  AuthHeader,
  BackgroundWrapper,
  Button,
  Input,
  Loader,
  ScreenWrapper,
  UserHeader,
} from '../../sharedcomponent';
import {useWindowDimensions} from 'react-native';
import {ESHOPDATA, SPONSOREDDATA} from '../../lib';
import image from '../../assets/cardbackground.png';
import CardImage from '../../assets/cardImage.svg';
import Star from '../../assets/Star.svg';
import Chair from '../../assets/chair.svg';
import BackgroundTwo from '../../assets/secondCardImage.svg';
import currency from 'currency.js';
import {useNavigation} from '@react-navigation/native';

const RenderEshopList = (details, width, navigation) => {
  const {item} = details;
  // each card 1.3 by screen size
  const cardWidth = Math.round(width / 1.3);
  const Widths = Math.round(width / 1.2);

  return (
    <Pressable
      onPress={() => navigation.navigate(item?.link)}
      className={`h-[138px] mx-4 rounded-[15px] bg-white flex flex-row items-center mt-6`}
      style={{width: cardWidth}}>
      <View className="p-3 w-[70%]">
        <Text className="text-base font-bold">{item.heading}</Text>
        <Text className="text-[10px] mt-2">{item.description}</Text>
      </View>
      <View className="">{item.image}</View>
    </Pressable>
  );
};

const RenderSponsoredList = (details, width) => {
  const {item} = details;
  const Widths = Math.round(width / 2);

  return (
    <View
      className=" h-[161px] bg-white py-3 mx-1 rounded-lg"
      style={{width: Widths}}>
      <View className="w-[90%]  flex flex-row justify-center">
        <Chair width={80} height={80} />
      </View>
      <View className="mx-auto">
        <Text className="font-bold">{item.name}</Text>
        <View className=" flex flex-row justify-between mt-1 pr-4">
          {/* star */}
          <View>
            <Star />
          </View>

          <Text className="text-[#3b4044]">{item.star}</Text>
          <Text className="text-[#3b4044]">|</Text>
          <Text className="text-[#3b4044]">{item.totalSold}</Text>
        </View>
        <View className="flex flex-row items-center mt-1">
          {/* star */}
          <Text className="text-[12px]">
            {currency(item.newPrice, {symbol: 'R'}).format()}
          </Text>
          <Text className="line-through text-[12px] ml-2">
            {currency(item.oldPrice, {symbol: 'R'}).format()}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Market = ({navigation}) => {
  const {width} = useWindowDimensions();

  return (
    <ScreenWrapper content={<UserHeader />}>
      <ScrollView className="pb-6">
        <View className=" w-full pb-4">
          <View>
            <FlatList
              data={ESHOPDATA}
              renderItem={item => RenderEshopList(item, width, navigation)}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
          <BackgroundWrapper image={image}>
            <Pressable
              onPress={() => navigation.navigate('Shop')}
              className="flex flex-row justify-between px-4 py-2">
              <View className="w-[50%]">
                <Text className="text-base font-bold">Shop E</Text>
                <Text className="text-[10px] py-2">
                  Welcome to our shop! We're glad you're here. Please take a
                  look around and let us know if there's anything we can help
                  you find
                </Text>
              </View>
              <View className="w-36 h-36 px-2">
                <CardImage />
              </View>
            </Pressable>
          </BackgroundWrapper>
          <View className="ml-4 my-2 ">
            <Text>Sponsored</Text>
          </View>
          <View
            className=" 
          px-1">
            {/* image */}
            <FlatList
              data={SPONSOREDDATA}
              renderItem={item => RenderSponsoredList(item, width, navigation)}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
          <View className="mt-3">
            <BackgroundWrapper>
              <View className="flex flex-col justify-between px-4 bg-white rounded-lg py-4">
                <View className="w-[60%] ">
                  <Text className="text-base font-bold">Services</Text>
                  <Text className="text-[10px] py-2">
                    Welcome to our services! We are here to provide you with
                    top-notch solutions to meet your needs
                  </Text>
                </View>
                <View className="w-36 ">
                  <BackgroundTwo width={180} />
                </View>
              </View>
            </BackgroundWrapper>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Market;
