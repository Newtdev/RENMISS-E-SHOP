import React, {useState} from 'react';
import {TouchableOpacity, View, Image, Text, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon, {Icons} from '../../components/Icons';
import {
  CustomeFlatList,
  Loader,
  PageLoader,
  ScreenWrapper,
} from '../../sharedcomponent';
import Images from '../../assets/shopImage.png';
import BgFour from './../../assets/five.jpg';
import Product from '../../assets/product.png';
import {ShopImageHeader} from '../../components/HeaderWrapper';
import {useNavigation} from '@react-navigation/native';
import {DIMENSION} from '../../utils/Constant';
import ModalWrapper from 'components/Modals';
import {COLORS} from 'utils/Colors';

const ProductActions = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const data = [
    {
      id: 1,
      name: 'pencil',
      color: '#000000',
      family: Icons.MaterialCommunityIcons,
      onSubmit: () => console.log('Edit'),
    },
    {
      id: 2,
      name: 'trash',
      color: '#b70000',
      family: Icons.Foundation,
      onSubmit: () => setModalVisible(!modalVisible),
    },
  ];
  const confirmDelete = () => {
    setModalVisible(false);
    setShowLoader(true);
  };
  return (
    <>
      <PageLoader submitting={showLoader}>
        <Loader />
      </PageLoader>
      {data?.map(({name, family, color, onSubmit, id}) => {
        return (
          <TouchableOpacity
            onPress={onSubmit}
            className="h-[65px] w-[61px] bg-white rounded-lg m-1"
            key={id}>
            <View className="h-10 m-auto w-10 bg-[#D9D9D9] rounded-full flex flex-row items-center justify-center">
              <Icon name={name} type={family} color={color} size={22} />
            </View>
          </TouchableOpacity>
        );
      })}

      <ModalWrapper
        showModal={modalVisible}
        materialCommunityIcon={'delete'}
        okElement={
          <Pressable onPress={confirmDelete}>
            <Text style={{color: COLORS.wallet, fontWeight: '500'}}>Yes</Text>
          </Pressable>
        }
        cancelElement={
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={{color: COLORS.shop, fontWeight: '500'}}>Cancel</Text>
          </Pressable>
        }>
        <View className="space-y-5">
          <View>
            <Text className="text-center text-base font-bold">
              Are you sure you want to delete this product
            </Text>
          </View>
          <View>
            <Text className="text-center">
              Please rate and review this product and recommend it to othe
              users.
            </Text>
          </View>
        </View>
      </ModalWrapper>
    </>
  );
};

const ShopProductCard = () => {
  return (
    <View className="flex flex-row items-center px-4">
      <TouchableOpacity
        onPress={() => console.log('jsldklslkd')}
        className="w-[60%] h-[65px] bg-white rounded-lg">
        <View className="flex flex-row items-center h-full pl-2">
          <Image source={Product} />
          <View>
            <Text className="text-sm font-bold text-[#508BCF]">
              Nivea for men
            </Text>
            <Text className="text-sm pt-1 font-bold text-[#508BCF]">
              R12,900
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <ProductActions />
    </View>
  );
};

const shopData = [
  {
    id: 1,
    name: 'Manage invoice',
    icon: (
      <Icon
        name="filetext1"
        type={Icons?.AntDesign}
        color="#b70000"
        size={54}
      />
    ),
    link: 'invoice-management',
  },
  {
    id: 2,
    name: 'Create invoice',
    icon: (
      <Icon name="addfile" type={Icons?.AntDesign} color="#b70000" size={54} />
    ),
    link: 'Create-invoice',
  },

  {
    id: 3,
    name: 'Create product',
    icon: (
      <Icon
        name="cart-plus"
        type={Icons.MaterialCommunityIcons}
        color="#b70000"
        size={54}
      />
    ),
    link: 'Create-product',
  },
];

const SmallCard = ({item}) => {
  const navigation = useNavigation();
  const {width} = DIMENSION;
  const {icon, name, id, link} = item.item;

  const cardWidth = width / 1.8;
  return (
    <>
      <View
        key={id}
        className="h-[137px] bg-white shadow rounded-xl pt-6 mx-1.5"
        style={{width: cardWidth}}>
        <TouchableOpacity
          className="flex flex-col items-center gap-3"
          onPress={() => navigation.navigate(link)}>
          {icon}
          <Text className="text-sm text-black">{name}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const ShopInformation = () => {
  const data = [
    {
      id: 4,
      name: 'Beauty Shop',
      icon: <Icon name="shop" type={Icons?.Entypo} color="#000000" size={20} />,
    },
    {
      id: 1,
      name: 'emmyjay233@gmail.com',
      icon: (
        <Icon
          name="envelope"
          type={Icons?.FontAwesome}
          color="#000000"
          size={20}
        />
      ),
    },
    {
      id: 2,
      name: '08124085839',
      icon: (
        <Icon
          name="phone"
          type={Icons?.FontAwesome}
          color="#000000"
          size={20}
        />
      ),
    },
    {
      id: 3,
      name: 'No 12 kenzo plaza banex, wuse 2, Abuja',
      icon: (
        <Icon name="location" type={Icons?.Entypo} color="#000000" size={20} />
      ),
    },
    ,
  ];
  return (
    <View className=" h-[187px] px-3 py-4 bg-white m-2 rounded-lg">
      <View className="my-1">
        {data?.map(info => {
          return (
            <View className="flex flex-row items-center" key={info.id}>
              <View className="my-2 mr-2">{info?.icon}</View>
              <Text className="text-[16px] font-bold">{info.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const MyShop = () => {
  return (
    <ScreenWrapper>
      <ScrollView className=" pb-6">
        <View className="">
          <ShopImageHeader userImage={Images} bgImage={BgFour} />
        </View>
        <View>
          <ShopInformation />
        </View>
        <View className="w-full p-4">
          <CustomeFlatList
            renderData={shopData}
            renderDisplay={item => <SmallCard item={item} />}
          />
        </View>
        <View>
          <ShopProductCard />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default MyShop;
