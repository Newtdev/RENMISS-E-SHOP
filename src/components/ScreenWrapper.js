import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ScreenWrapper = ({children, content}) => {
  return (
    <View className="w-full overflow-y-auto p-5">
      {/* <View className="w-full h-[124px] bg-[#b70000] rounded-t-xl absolute top-0 z-10">
          {content}
        </View> */}
      {children}
    </View>
  );
};

export default ScreenWrapper;
