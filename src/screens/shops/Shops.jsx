import {useMemo} from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {Pressable, Text, View} from 'react-native';
import {SHOPDATA} from '../../lib';
import {ImageWrapper, ScreenWrapper} from '../../sharedcomponent';
import Filter from '../../assets/filter.svg';
import {useNavigation} from '@react-navigation/native';
import {DIMENSION} from 'utils/Constant';

const trucateText = str => {
  let limit = 17;
  if (str.split('').length > limit) {
    return str.split('').slice(0, limit).join('') + '...';
  }
  return str;
};

const RenderList = ({item}) => {
  const navigation = useNavigation();
  const {width} = DIMENSION;
  const shopWidth = width / 2;
  return (
    <Pressable
      className="h-[212px] mt-2 ml-3 rounded-[14px] bg-red-900 overflow-hidden"
      style={{width: shopWidth}}
      onPress={() => navigation.navigate('Shop Details')}>
      <ImageWrapper image={item?.image}>
        <View className=" h-[55%] w-full">
          <View
            className="w-24 p-2 -mt-1  bg-[#00000033]"
            style={{borderTopLeftRadius: 15, borderBottomRightRadius: 6}}>
            <Text className="text-[8px] text-white">
              {`Block ${item?.block} shop ${item?.shop}`}
            </Text>
          </View>
        </View>
        <View className="bg-white h-[40%] w-[95%] mx-auto rounded-[22px] flex flex-col ">
          <View className="w-full shadow h-54 pl-4 pt-2">
            <Text className="text-sm font-bold text-black capitalize">
              {trucateText(item?.name)}
            </Text>
          </View>
          <View className="flex flex-row justify-between items-center mt-2 px-4">
            <View className=" flex flex-row items-center">
              <View className="h-[30px] w-[30px] rounded-full mr-1 border border-r-[#E92626] border-b-[#E92626] border-t-[#3A7700] border-l-[#3A7700] flex flex-row items-center">
                <View className="w-full h-full rounded-full"></View>
              </View>
              <Text className="text-[10px]">175 items</Text>
            </View>
            <View>
              <Pressable className="bg-black px-3 rounded-xl text-sm py-1.5">
                <Text className="font-bold text-[10px] text-white">Follow</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageWrapper>
    </Pressable>
  );
};

const ShopListComp = ({item}) => {
  return (
    <View key={item.id}>
      <View className="w-full flex flex-row h-10 items-center px-4 justify-between relative">
        {item?.map((title, index) => {
          const hid = index > 0 ? 'hidden' : 'block';
          return (
            <Text
              key={index}
              className={`font-bold ${hid}`}>{`Block ${title?.block}`}</Text>
          );
        })}
      </View>
      <FlatList
        data={item}
        renderItem={({item}) => <RenderList item={item} />}
        onEndReached={() => console.log('horizontal scroll')}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const Shops = () => {
  const {width} = useWindowDimensions();
  const shopWidth = Math.round(width / 2);
  const navigation = useNavigation();

  const getValuesisArray = useMemo(() => {
    let result = [];

    Object.keys(SHOPDATA.blocks).forEach(function (key) {
      if (Array.isArray(SHOPDATA.blocks[key])) {
        result = [...result, SHOPDATA.blocks[key]];
      }
      return result;
    });
    return result;
  }, []);

  return (
    <ScreenWrapper>
      <FlatList
        data={getValuesisArray}
        renderItem={({item}) => <ShopListComp item={item} />}
        onEndReached={() => console.log('next')}
      />

      <Pressable
        onPress={() => navigation.navigate('Search')}
        className="bg-[#D9D9D9] h-16 w-16 rounded-full absolute right-6 bottom-14 flex flex-row items-center justify-center">
        <Filter width={25} height={25} />
      </Pressable>
    </ScreenWrapper>
  );
};

export default Shops;
