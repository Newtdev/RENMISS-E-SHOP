import {ScrollView, Text, View, Image} from 'react-native';
import {
  Button,
  ConfirmationUI,
  Loader,
  ModalWrapper,
  PageLoader,
  ScreenWrapper,
} from '../../sharedcomponent';
import Icon from 'react-native-vector-icons/AntDesign';
import {Invoice} from '../../lib';
import currency from 'currency.js';
import Chair from '../../assets/chair.svg';
import {useWindowDimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  cancelPurchase,
  purchaseActive,
  purchaseInvoice,
  purchaseItem,
  request,
} from '../../features/invoice';

export const IconWrap = ({name, size, color}) => {
  return <Icon name={'filetext1'} size={size} color={color} />;
};

const RenderSponsoredList = ({item}) => {
  const {width} = useWindowDimensions();
  // const {item} = details;
  const Widths = Math.round(width / 2.3);

  return (
    <View
      className=" h-[161px] bg-white pb-2 m-1 rounded-lg"
      style={{width: Widths}}>
      <View className="w-[90%]  flex flex-row justify-center">
        <Chair width={80} height={80} />
      </View>
      <View className="mx-auto">
        <Text className="font-bold">Wooden Frame Chair</Text>
        <View className=" flex flex-row justify-start mt-1 ">
          {/* star */}
          <View>
            <Text>Quantity</Text>
          </View>
          <Text className="text-[#3b4044] mx-2">|</Text>
          <Text className="text-[#3b4044]">1</Text>
        </View>
        <View className="flex flex-row items-center mt-1">
          <Text className=" text-[12px] font-bold">
            {currency(item.oldPrice, {symbol: 'R'}).format()}
          </Text>
        </View>
      </View>
    </View>
  );
};

const InvoiceDetails = () => {
  const {creator, items, totalAmount, orderStatus, invoiceNote} = Invoice;
  const dispatch = useDispatch();
  const purchase = useSelector(purchaseInvoice);
  const loading = useSelector(request);

  // console.log();
  const HandlePurchase = () => {
    dispatch(purchaseActive());
  };

  return (
    <ScreenWrapper content={''}>
      <ScrollView className="pb-6">
        <PageLoader submitting={loading}>
          <Loader />
        </PageLoader>
        <ModalWrapper submitting={purchase}>
          <ConfirmationUI
            heading="Transaction Confirmation"
            para="You will be charged R56,000 for this transaction"
            onRequest={() => dispatch(purchaseItem())}
            onClose={() => dispatch(cancelPurchase())}
          />
        </ModalWrapper>
        <View className=" w-[95%] mx-auto py-6 ">
          <View className="flex flex-row items-center px-4">
            <View className="h-16 w-16 rounded-full bg-[#003356] flex flex-row items-center justify-center mr-4">
              <IconWrap name="filetext1" size={30} color="#fff" />
            </View>
            <Text className="text-lg font-bold">{creator?.rssn}</Text>
          </View>
          <View className="mt-6 ml-4 flex flex-col justify-evenly px-4 h-48">
            <View className="flex flex-row items-center">
              <Text>Name: </Text>
              <Text className="ml-2 font-bold">
                {creator?.firstName} {creator?.lastName}
              </Text>
            </View>

            <View className="flex flex-row items-center">
              <Text>Total Price </Text>
              <Text className="ml-2 font-bold">
                {currency(totalAmount, {symbol: 'R'}).format()}
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <Text>Item: </Text>
              <Text className=" ml-2 font-bold">{items?.length} Item</Text>
            </View>
            <View className="flex flex-row items-center ">
              <Text className="text-center">Note: </Text>
              <Text className="ml-2 font-bold">{invoiceNote}</Text>
            </View>
            <View className="flex flex-row items-center">
              <Text>Status:</Text>
              <Text className="ml-2 font-bold text-yellow-500">
                {orderStatus}
              </Text>
            </View>
          </View>
          <View className="mt-6 flex flex-row flex-wrap">
            <RenderSponsoredList item={items} />
            <RenderSponsoredList item={items} />
            <RenderSponsoredList item={items} />
            <RenderSponsoredList item={items} />
            <RenderSponsoredList item={items} />
          </View>
          <View className="w-ful mt-10 flex flex-row items-center justify-center">
            <Button name="Make Purchase" onPress={HandlePurchase} />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default InvoiceDetails;
