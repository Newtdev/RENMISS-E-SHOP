import React from 'react';
import {Alert, Button, Text, View} from 'react-native';

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

export default HeaderWrapper;
