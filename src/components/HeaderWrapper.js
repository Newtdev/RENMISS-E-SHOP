import React from 'react';
import {Alert, Button, ImageBackground, Text, View, Image} from 'react-native';

const HeaderWrapper = ({navigation}) => {
  return (
    <View className="bg-[#b70000] flex flex-row h-28 px-4 py-9">
      <View className="flex justify-start">
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
      </View>
      <View className="flex self-center">
        <Text className="text-lg font-bold text-white">Header Name</Text>
      </View>
      <View className="flex self-end">
        <Button onPress={() => navigation.goBack(null)} title="Edit" />
      </View>
    </View>
  );
};

export const ShopImageHeader = ({userImage, bgImage}) => {
  return (
    <ImageBackground
      source={userImage}
      resizeMode="cover"
      className="h-[128px] w-full  mt-2 flex flex-row items-center">
      <View
        className="w-[87.11px]
h-[91px] rounded-full bg-red-100 ml-2 overflow-hidden">
        <Image className="w-full h-full" source={bgImage} />
      </View>
    </ImageBackground>
  );
};

export default HeaderWrapper;
