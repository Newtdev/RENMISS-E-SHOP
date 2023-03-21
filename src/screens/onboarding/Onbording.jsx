import {useEffect, useRef, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DIMENSION} from 'utils/Constant';
import ImageOne from '../../assets/onboardone.svg';
import {ONBOARDDATA} from '../../lib';
import {Button} from '../../sharedcomponent';

const SlideNavigation = props => {
  const {active, setActive, btn, onPress} = props;
  const activeBg = btn === active ? 'bg-black' : 'bg-[#D9D9D9]';
  return (
    <Pressable
      onPress={onPress}
      className={`${activeBg} h-4 w-4 rounded-full mx-1`}></Pressable>
  );
};

const Onboarding = ({navigation}) => {
  const {width} = DIMENSION;
  const [currentSlideIndex, setCurrentPageIndex] = useState(0);
  const ref = useRef();

  const OnNextSlide = () => {
    let next = currentSlideIndex + 1;
    const offset = next * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentPageIndex(next);
  };

  const OnPrevSlide = () => {
    let prev = currentSlideIndex - 1;
    const offset = prev * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentPageIndex(prev);
  };

  const onPress = () => {
    if (currentSlideIndex === 0) {
      OnNextSlide();
    } else {
      navigation.navigate('Reason');
    }
  };

  const renderItem = ({item}) => {
    return (
      <View className=" h-screen w-screen bg-[#FFFFFF]">
        <View className="w-full flex justify-center items-center h-56  mt-10 object-contain">
          <item.image width={200} height={200} />
        </View>
        <View className="h-36 mt-6 flex flex-col justify-evenly items-center  px-10">
          <Text className="  font-bold text-[24px] text-center px-4">
            {item.heading}
          </Text>
          <Text className="text-center">{item.description}</Text>
        </View>
        <View className=" flex flex-row mx-auto justify-center items-end h-48 mb-7">
          <SlideNavigation
            btn={0}
            active={currentSlideIndex}
            onPress={OnPrevSlide}
          />
          <SlideNavigation
            btn={1}
            active={currentSlideIndex}
            onPress={OnNextSlide}
          />
        </View>
        <View className=" w-full flex flex-row mx-auto justify-center items-end">
          <Button name={item.buttonName} onPress={onPress} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        ref={ref}
        data={ONBOARDDATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      {/* ONBOARDING UI */}
    </SafeAreaView>
  );
};

export default Onboarding;
