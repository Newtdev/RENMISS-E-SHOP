import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import { useWindowDimensions } from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {COLORS} from '../../utils/Colors';
import {FlatList} from 'react-native-gesture-handler';
import {INVOICEDATA} from '../../lib';
import {Tab} from '../../components/Buttons';
import ScreenWrapper from '../../components/ScreenWrapper';

// import CustomFlatList from 'components/CustomFlatList';
// import {COLORS} from 'utils/Colors';
// import ScreenWrapper from '../../components/ScreenWrapper';

const InvoiceList = ({item}) => {
  const navigation = useNavigation();
  const {id, invoiceNote, invoiceNumber} = item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('invoice', {id})}
      key={item?.id}
      className="w-full bg-white h-[63.70px] rounded-lg flex flex-row items-center mt-4">
      <View className="w-[10px] bg-[#FFC746] h-full rounded-tl-lg rounded-bl-lg "></View>
      <View className="ml-4">
        <Text className="text-lg font-bold text-black">{invoiceNumber}</Text>
        <Text className="text-xs text-[#9DA8C3] whitespace-normal">
          {invoiceNote}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Invoices = () => {
  const [value, setValue] = useState('');
  const buttonData = [
    {
      value: 'pending',
      label: 'Pending',
      style: {borderRadius: 5, color: 'red'},
      checkedColor: COLORS.shop,
      showSelectedCheck: true,
    },

    {
      value: 'complete',
      label: 'Complete',
      style: {borderRadius: 5, color: 'red'},
      checkedColor: COLORS.shop,
      showSelectedCheck: true,
    },
  ];
  return (
    <ScreenWrapper>
      <View className="h-full w-full">
        <View className="w-[90%] h-full mx-auto mt-4 ">
          <Tab value={value} setValue={setValue} data={buttonData} />

          {value === 'pending' ? (
            <View className="w-full flex flex-col justify-center">
              {/* <CustomFlatList
                renderData={INVOICEDATA?.invoices?.data}
                renderDisplay=
                vertical
              /> */}
              <FlatList
                data={INVOICEDATA?.invoices?.data}
                renderItem={({item}) => <InvoiceList item={item} />}
              />
            </View>
          ) : (
            <View className="w-full flex flex-col justify-center">
              <FlatList
                data={INVOICEDATA?.invoices?.data}
                renderDisplay={({item}) => <InvoiceList item={item} />}
              />
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Invoices;
