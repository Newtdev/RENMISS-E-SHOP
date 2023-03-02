import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Bell from '../assets/bell.svg';
import Settings from '../assets/settings.svg';
import Dots from '../assets/dots.svg';
import BackArrow from '../assets/backArrow.svg';
import Lottie from 'lottie-react-native';

export const AuthHeader = ({name, description}) => {
  const [text, setText] = useState('');
  return (
    <>
      <View className="h-36 w-full">
        <TextInput
          className="py-4 px-4 border border-red-900"
          onChangeText={setText}
          onChange={setText}
          value={text}
        />
        {console.log(text)}

        <View className="h-56 w-full flex flex-col justify-center items-center">
          <View className="h-12">
            {/* <ImageLogo height={31} width={82.88} /> */}
          </View>

          <Text className="text-[24px] font-[500px] mb-1 text-[#29335C]">
            {name}
          </Text>
          <Text className="text-[#949494]">{description}</Text>
        </View>
      </View>
    </>
  );
};

export const Input = ({
  icon,
  name,
  onChangeText,
  placeholder = 'Enter Shop',
}) => {
  return (
    <View className="w-64 bg-red-900">
      <TextInput
        className="py-1  border-0 rounded-sm text-white"
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType="numeric"
      />
    </View>
  );
};

export const Loader = () => {
  return (
    <View>
      <Lottie source={require('../assets/lotties.json')} autoPlay loop />
      <Text className="ml-2 text-white mt-10 font-bold">Loading...</Text>
    </View>
  );
};

/* <ActivityIndicator size="large" color="#b70000" /> */

export const Button = ({name, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#E92626' : '#b70000',
        },
        styles.wrapperCustom,
      ]}
      // className="w-[344px] h-[59px] rounded-[15px] flex justify-center items-center"
    >
      <Text className="text-white text-center text-base font-bold">{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 8,
    width: 334,
    height: 59,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export const PageLoader = ({submitting, children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={submitting ? true : false}>
      <View
        className=" h-full w-full flex items-center justify-center mx-auto"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <View className="w-3/4 h-14  shadow-sm flex flex-row justify-center items-center rounded">
          {children}
        </View>
      </View>
    </Modal>
  );
};
export const ConfirmationUI = ({heading, para, onRequest, onClose}) => {
  return (
    <View className="h-[256px] rounded-tl-[30] rounded-tr-[30] bg-white w-full mt-auto flex flex-col items-center py-6">
      <View>
        <Text className="text-lg font-bold text-center text-[#003356]">
          {heading}
        </Text>
        <Text className="text-sm font-bold text-center px-16 text-black mt-4">
          {para}
        </Text>
      </View>
      <View className="w-full mt-4 py-2 ">
        <Pressable
          className="py-2 bg-[#003356] w-[50%] rounded-xl mx-auto"
          onPress={onRequest}>
          <Text className="text-center text-white text-sm">Continue</Text>
        </Pressable>
        <Pressable
          className="py-2 bg-[#b70000] w-[50%] mt-4 rounded-xl mx-auto"
          onPress={onClose}>
          <Text className="text-center text-white text-sm">Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};

export const ModalWrapper = ({children, submitting}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={submitting ? true : false}>
      <View
        className=" h-full w-full flex items-center justify-center mx-auto"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        {children}
      </View>
    </Modal>
  );
};

export const HeaderWrapper = ({children, name}) => {
  return (
    <SafeAreaView>
      <View className="h-full pt-16">
        <View className="px-4 w-3/4 mx-auto">
          <Text className="text-[24px] font-[700] text-center">{name}</Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

export const Card = ({children}) => {
  return (
    <View className=" pt-6">
      <View className="w-[378px] h-[198px] mx-auto rounded-[15px] bg-blue-900">
        {children}
      </View>
    </View>
  );
};

export const UserHeader = () => {
  return (
    <View className="h-full rounded-t-lg px-6 flex flex-row justify-between">
      {/* AVATAR AND SETTINGS */}
      <View className="flex flex-row items-center font-bold font-base">
        <View className="h-[60px] w-[60px]  p-0.5 rounded-full mr-2 border border-r-[#E92626] border-b-[#E92626] border-t-[#3A7700] border-l-[#3A7700]">
          <View className="w-full h-full  rounded-full "></View>
        </View>
        <Text className="font-bold text-white">Thomas Ejembi</Text>
      </View>
      <View className="flex flex-row items-center font-bold font-base flex flex-row justify-evenly w-24 ">
        <Bell />
        <Settings />
        <Dots />
      </View>
    </View>
  );
};

export const ScreenWrapper = ({children, content}) => {
  return (
    <SafeAreaView>
      <View className="w-full overflow-y-auto">
        {/* <View className="w-full h-[124px] bg-[#b70000] rounded-t-xl absolute top-0 z-10">
          {content}
        </View> */}
        {/* <ScrollView className="h-[150rem] mt-28 pb-6 overflow-scroll"> */}
        {children}
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export const BackgroundWrapper = ({children, image}) => {
  return (
    <View className="h-[187px] w-[93%] mx-auto bg-white rounded-lg mt-4">
      <ImageBackground
        source={image}
        resizeMode="contain"
        style={{flex: 1, justifyContent: 'center'}}>
        {children}
      </ImageBackground>
    </View>
  );
};

export const ImageWrapper = ({children, image}) => {
  console.log(image, children);
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      {children}
    </ImageBackground>
  );
};

export const NavigationHeaderWapper = ({name, back}) => {
  return (
    <View className="h-full rounded-t-lg flex flex-row">
      {/* AVATAR AND SETTINGS */}
      <View className="pl-4 pt-10 flex flex-row items-center justify-between font-bold font-base">
        <Pressable className="ml-auto w-[40%]" onPress={() => back()}>
          <BackArrow />
        </Pressable>
        <View className="w-[60%]">
          <Text className="font-bold text-base text-white">{name}</Text>
        </View>
      </View>
    </View>
  );
};

export const CustomeFlatList = ({
  renderData,
  renderDisplay,
  width,
  vertical,
}) => {
  if (!renderData) {
    return null;
  }
  return (
    <FlatList
      data={renderData}
      renderItem={item => renderDisplay(item, width)}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal={vertical ? false : true}
    />
  );
};

const CustomRatingBar = ({maxRating, defaultRating, setDefaultRating}) => {
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  return (
    <View style={ratingStyle.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setDefaultRating(item)}>
            <Image
              style={ratingStyle.starImageStyle}
              source={
                item <= defaultRating
                  ? {uri: starImageFilled}
                  : {uri: starImageCorner}
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const FiveStarRating = () => {
  const [defaultRating, setDefaultRating] = useState(1);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const props = {
    maxRating,
    defaultRating,
    setDefaultRating: val => setDefaultRating(val),
  };

  return (
    <View style={ratingStyle.customRatingBarStyle}>
      <CustomRatingBar {...props} />
    </View>
  );
};

const ratingStyle = StyleSheet.create({
  customRatingBarStyle: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 27,
    height: 27,
    resizeMode: 'cover',
  },
});

export const CustomInput = ({
  placeholder,
  onChangeText,
  type,
  value,
  error,
  touched,
}) => {
  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View className="my-2">
      <TextInput
        onChangeText={onChangeText}
        inputMode={type}
        value={value}
        placeholder={placeholder}
        className="w-full bg-white mx-auto px-4 py-2 rounded-lg text-black"
      />
      {error && touched ? (
        <Text className="mt-1 ml-2 text-xs text-red-600">{error}</Text>
      ) : null}
    </View>
  );
};
export const CustomTextArea = ({
  placeholder,
  onChangeText,
  value,
  type,
  error,
  touched,
}) => {
  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View>
      <TextInput
        value={value}
        inputMode={type}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="w-[100%] bg-white mx-auto h-24 px-4 rounded-2xl text-black"
      />
      {error && touched ? (
        <Text className="mt-1 ml-2 text-xs text-red-600">{error}</Text>
      ) : null}
    </View>
  );
};
