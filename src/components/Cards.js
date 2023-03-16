import React from 'react';
import {ImageBackground} from 'react-native';
import {Image, Text, TouchableHighlight, View} from 'react-native';

const CardWrapper = ({children, banner}) => {
  return (
    <View className={'h-[230px] w-[48%]'}>
      <ImageBackground
        source={banner}
        resizeMode="cover"
        borderRadius={20}
        className="flex flex-1 justify-start p-3 bg-white rounded-2xl mb-3">
        {children}
      </ImageBackground>
    </View>
  );
};
export const ServiceProviderCard = ({children, banner}) => {
  return (
    <View className="h-fit w-[48%]">
      <View className="flex flex-1 justify-start p-3 bg-white rounded-2xl mb-3">
        {children}
      </View>
    </View>
  );
};
export const DefaultCard = ({children, bgColor, txColor}) => {
  return (
    <View
      className={'flex py-3 px-5 rounded-2xl'}
      style={{
        backgroundColor: bgColor,
        color: txColor,
      }}>
      {children}
    </View>
  );
};

export default CardWrapper;
