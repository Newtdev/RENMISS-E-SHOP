import React from 'react';
import {ImageBackground} from 'react-native';
import {Image, Text, TouchableHighlight, View} from 'react-native';

const ServicesCategoryCard = ({title, description, banner}) => {
  return (
    <View className="h-[250px] w-[48%] ">
      <ImageBackground
        source={banner}
        resizeMode="cover"
        borderRadius={20}
        className="flex flex-1 justify-start p-3 h-full text-lg text-white">
        <Text className="text-sm text-white font-semibold">{description}</Text>
        <Text className="text-lg text-white font-bold">{title}</Text>
      </ImageBackground>
    </View>
  );
};

export default ServicesCategoryCard;
