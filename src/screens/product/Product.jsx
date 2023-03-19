import {Modal, Pressable, ScrollView, Text, View} from 'react-native';
import {
  Button,
  FiveStarRating,
  NavigationHeaderWapper,
  PageLoader,
} from '../../sharedcomponent';
import {SliderBox} from 'react-native-image-slider-box';
import currency from 'currency.js';
import WishList from '../../assets/wishlist.svg';
import Rating from '../../assets/rating.svg';
import {useState} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import RatingStars from 'components/Rating';
import ModalWrapper from 'components/Modals';
import {CustomTextInput} from 'components/Inputs';
import {COLORS} from 'utils/Colors';

const RatingModal = ({show, setShow}) => {
  return (
    <ModalWrapper
      showModal={show}
      okElement={
        <Pressable>
          <Text style={{color: COLORS.wallet, fontWeight: '500'}}>Post</Text>
        </Pressable>
      }
      cancelElement={
        <Pressable onPress={() => setShow(false)}>
          <Text style={{color: COLORS.shop, fontWeight: '500'}}>Cancel</Text>
        </Pressable>
      }>
      <View className="space-y-5">
        <View>
          <RatingStars size={25} isDisabled={false} />
        </View>
        <View>
          <Text className="text-center">
            Please rate and review this product and recommend it to othe users.
          </Text>
        </View>
        <View>
          <CustomTextInput placeholder={'Add a review'} />
        </View>
      </View>
    </ModalWrapper>
  );
};

const DetailsPill = () => {
  const data = [
    {id: 1, key: 'Color', value: 'Blue'},
    {id: 2, key: 'Size', value: '33'},
    {id: 3, key: 'Brand', value: 'Gucci'},
    {id: 4, key: 'Operating system', value: 'Android OS'},
    {id: 5, key: 'Brand', value: 'Samsung'},
  ];

  const renderPill = () => {
    return data?.map(det => {
      return (
        <View
          key={det?.id}
          className="flex flex-row items-center px-3 py-2 mt-2 rounded-xl"
          style={{backgroundColor: 'rgba(80, 139, 207, 0.25)'}}>
          <Text className="text-sm">{det?.key}: </Text>
          <Text className="font-bold">{det?.value}</Text>
        </View>
      );
    });
  };
  return (
    <View className=" flex flex-row justify-between items-center flex-wrap">
      {renderPill()}
    </View>
  );
};

const ProductDetails = ({navigate, hidden}) => {
  const [show, setShow] = useState(false);
  return (
    <View className="">
      <Text className="text-2xl font-bold text-[#508BCF]">
        Designer Nike Shoe For Men
      </Text>
      <Text className="text-2xl text-[#508BCF] font-bold mt-2">
        {currency(430000, {symbol: 'N'}).format()}
      </Text>
      <View className="mt-4">
        <DetailsPill />
      </View>
      <View>
        <Text className="text-lg mt-4">Description</Text>
        <Text className="mt-4 text-sm text-black leading-[1.2]">
          As an Internet marketing strategy, SEO considers how search engines
          work, the computer-programmed algorithms that dictate seo behavior. As
          an Internet marketing strategy, SEO considers how search engines work,
          the computer-programmed algorithms that dictate seo behavior.
        </Text>
      </View>
      <View className="mt-4 flex flex-row justify-between items-center">
        <View className="w-full w-[85%] ">
          <Pressable className="bg-[#E92626] h-[59px] rounded-[15px] flex flex-row justify-center items-center ">
            <Text className="text-white">Chat Vendor</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => navigate('Wishlist')}>
          <WishList />
        </Pressable>
      </View>
      <View className="w-full flex flex-row justify-center">
        <Pressable className="mt-4" onPress={() => setShow(true)}>
          <Rating />
        </Pressable>
      </View>
      <RatingModal show={show} setShow={() => setShow(!show)} />

      {/* <PageLoader /> */}
    </View>
  );
};

const Product = ({navigation}) => {
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ];
  return (
    <ScreenWrapper
      content={
        <NavigationHeaderWapper name="Product" back={navigation.goBack} />
      }>
      <ScrollView>
        <View className=" flex flex-row justify-center items-center">
          <View className="fl">
            <SliderBox
              images={images}
              sliderBoxHeight={184}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#000000"
              inactiveDotColor="#7D7D7D"
              resizeMethod={'resize'}
              resizeMode={'cover'}
              ImageComponentStyle={{
                borderRadius: 15,
                width: '70%',
                marginTop: 5,
              }}
              dotStyle={{
                width: 14,
                height: 14,
                borderRadius: 100,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'rgba(128, 128, 128, 0.92)',
              }}
              paginationBoxStyle={{
                position: 'absolute',
                bottom: 0,
                padding: 0,
                marginTop: 80,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                backgroundColor: '#f4f4f4',
                width: '100%',
              }}
              //   paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
            />
          </View>
        </View>
        <View className="mt-4 px-10">
          <ProductDetails {...navigation} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Product;
