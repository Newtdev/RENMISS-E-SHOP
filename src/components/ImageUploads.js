import React from 'react';
import {Pressable, View, Image, Text} from 'react-native';
import Icon from './Icons';
import Icons from './Icons';

const ImageUploadFunction = ({
  multiple = true,
  values,
  name = 'Other Images',
  handleChoosePhoto,
  disabledbtn,
}) => {
  return (
    <View className="mx-auto mt-9 ">
      <Pressable
        className="h-28 w-36 bg-white rounded-lg flex flex-col items-center justify-center p-3"
        onPress={handleChoosePhoto}
        disabled={disabledbtn}>
        {values ? (
          <Image
            source={{
              uri: `${values}`,
            }}
            className=" h-16 w-24"
            resizeMode="cover"
          />
        ) : (
          <Icon name="image-outline" type={Icons.Ionicons} size={60} />
          //   <Image source={Upload} resizeMode="cover" />
        )}

        <Text className="text-[10px] mt-1 font-bold">{name}</Text>
      </Pressable>
    </View>
  );
};
export default ImageUploadFunction;
