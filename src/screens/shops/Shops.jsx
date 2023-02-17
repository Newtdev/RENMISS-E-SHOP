import {useMemo} from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {SHOPDATA, SPONSOREDDATA} from '../../lib';
import {
  CustomeFlatList,
  ImageWrapper,
  NavigationHeaderWapper,
  ScreenWrapper,
} from '../../sharedcomponent';
import Filter from '../../assets/filter.svg';

const trucateText = str => {
  let limit = 17;
  if (str.split('').length > limit) {
    return str.split('').slice(0, limit).join('') + '...';
  }
  return str;
};

const renderList = (item, width, navigation) => {
  console.log(item?.item?.id);
  const {block, shop, name, image} = item?.item;
  return (
    <Pressable
      className="h-[212px] mt-2 ml-3 rounded-[14px] bg-red-900 overflow-hidden"
      style={{width: width}}
      onPress={() => navigation.navigate('Shop')}>
      <ImageWrapper image={image}>
        <View className=" h-[55%] w-full">
          <View
            className="w-24 p-2 -mt-1  bg-[#00000033]"
            style={{borderTopLeftRadius: 15, borderBottomRightRadius: 6}}>
            <Text className="text-[8px] text-white">
              {`Block ${block} shop ${shop}`}
            </Text>
          </View>
        </View>
        <View className="bg-white h-[40%] w-[95%] mx-auto rounded-[22px] flex flex-col ">
          <View className="w-full shadow h-54 pl-4 pt-2">
            <Text className="text-sm font-bold text-black capitalize">
              {trucateText(name)}
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

const Shops = ({navigation}) => {
  const {width} = useWindowDimensions();
  const shopWidth = Math.round(width / 2);

  const getValuesisArray = useMemo(() => {
    let result = [];

    Object.keys(SHOPDATA.blocks).forEach(function (key) {
      if (Array.isArray(SHOPDATA.blocks[key])) {
        // result.push(SHOPDATA.blocks[key]);
        result = [...result, SHOPDATA.blocks[key]];
      }
      return result;
    });
    return result;
  }, []);

  return (
    <ScreenWrapper
      content={
        <NavigationHeaderWapper name="Shops" back={navigation.goBack} />
      }>
      <ScrollView className=" pb-6">
        {getValuesisArray?.map(blocks => {
          return (
            <View key={blocks?.id}>
              <View className="w-full flex flex-row h-10 items-center px-4 justify-between relative">
                {blocks?.map((title, index) => {
                  const hid = index > 0 ? 'hidden' : 'block';
                  return (
                    <Text
                      key={index}
                      className={`font-bold ${hid}`}>{`Block ${title?.block}`}</Text>
                  );
                })}
              </View>
              <CustomeFlatList
                renderData={blocks}
                renderDisplay={item => renderList(item, shopWidth, navigation)}
              />
            </View>
          );
        })}
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('Search')}
        className="bg-[#D9D9D9] h-16 w-16 rounded-full absolute right-6 bottom-14 flex flex-row items-center justify-center">
        <Filter width={25} height={25} />
      </Pressable>
    </ScreenWrapper>
  );
};

export default Shops;
