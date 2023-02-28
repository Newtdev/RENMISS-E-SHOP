import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {
  Button,
  CustomInput,
  CustomTextArea,
  NavigationHeaderWapper,
  ScreenWrapper,
} from '../../sharedcomponent';
import ImagePicker from 'react-native-image-crop-picker';
import Upload from '../../assets/upload.png';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createShopInfo, selectNewShop} from '../../features/createshop';

const CreateShop = ({navigation}) => {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const shopDetails = useSelector(selectNewShop);
  const [info, setInfo] = useState({name: ''});

  // const handleChoosePhoto = async () => {
  //   await launchImageLibrary(
  //     {
  //       storageOptions: {
  //         skipBackup: true,
  //         path: 'images',
  //       },
  //     },
  //     res => {

  //       setInfo({...info, banner: res?.assets[0]?.uri});
  //       // console.log(res?.assets[0]?.uri);
  //     },
  //   ).catch(err => {
  //     console.log(err);
  //   });
  // };

  const onChangeText = (e, a) => {
    setInfo({...info, [a]: e});
  };

  const onClick = e => console.log(info);

  return (
    <ScreenWrapper
      content={
        <NavigationHeaderWapper name="Create Shop" back={navigation.goBack} />
      }>
      <ScrollView>
        {/* <NavigationHeaderWapper name="Create Shop" back={navigation.goBack} /> */}
        <View className="h-screen  w-full mx-auto px-10 mb-5">
          {/* <View className="h-24 flex flex-row justify-center items-center">
            <Text className="text-xl font-bold text-black">Create Shop</Text>
          </View> */}
          <View className="flex flex-col justify-evenly w-full">
            <CustomInput
              placeholder="Enter shop name"
              type="text"
              onChangeText={text => onChangeText(text, 'name')}
            />
            <View className="mt-4">
              <CustomTextArea
                onChangeText={text => onChangeText(text, 'decription')}
                placeholder="Description"
                type="text"
              />
            </View>
          </View>
          <View className=" flex flex-col justify-between mt-4">
            <Text className="text-lg text-[#003356] ml-2 ">
              Contact Address
            </Text>
            <CustomInput
              placeholder="Phone number"
              onChangeText={text => onChangeText(text, 'phone')}
              type="tel"
            />

            <CustomInput
              placeholder="Email address"
              type="email"
              onChangeText={text => onChangeText(text, 'email')}
            />
            <CustomInput
              placeholder="Physical address"
              type="text"
              onChangeText={text => onChangeText(text, 'address')}
            />
          </View>

          <View className="mx-auto mt-9 ">
            <Pressable
              className="h-28 w-36 bg-white rounded-lg flex flex-col items-center justify-center p-3"
              onPress={() =>
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true,
                }).then(image => {
                  console.log(image);
                })
              }>
              {info?.banner ? (
                <Image
                  source={{
                    uri: `${image}`,
                  }}
                  className=" h-16 w-24"
                  resizeMode="cover"
                />
              ) : null}
              {!info?.banner ? (
                <Image source={Upload} resizeMode="cover" />
              ) : null}
              <Text className="text-[10px] mt-2 font-bold">
                Add shop banner
              </Text>
            </Pressable>
          </View>
          <View className="w-full bg-red-800 mt-10 flex flex-row items-center justify-center">
            <Button name="Done" onPress={onClick} />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CreateShop;
