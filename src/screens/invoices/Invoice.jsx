// import {ScrollView, TouchableOpacity} from 'react-native';
// import {Text, View} from 'react-native';
// import SelectDropdown from 'react-native-select-dropdown';
// import {CustomeFlatList, ScreenWrapper} from '../../sharedcomponent';
// import {INVOICEDATA} from '../../lib';
// import {useNavigation} from '@react-navigation/native';
// import {useDispatch, useSelector} from 'react-redux';
// import {activeID, getActiveID} from '../../features/invoice';

// const InvoiceList = (item, width, navigation) => {
//   const {id, invoiceNote, invoiceNumber} = item?.item;
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('invoice', {id})}
//       key={item?.id}
//       className="w-full bg-white h-[63.70px] rounded-lg flex flex-row items-center mt-4">
//       <View className="w-[10px] bg-[#FFC746] h-full rounded-tl-lg rounded-bl-lg "></View>
//       <View className="ml-4">
//         <Text className="text-lg font-bold text-black">
//           {item?.item?.invoiceNumber}
//         </Text>
//         <Text className="text-xs text-[#9DA8C3] whitespace-normal">
//           {item?.item?.invoiceNote}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const Tab = ({name, active, id}) => {
//   const dispatch = useDispatch();
//   const activeName = id === active ? 'text-red-700' : 'text-black';
//   const activeLine = id === active ? 'w-[18px] h-0.5 bg-[#b70000] mx-auto' : '';

//   return (
//     <TouchableOpacity onPress={() => dispatch(activeID(active))}>
//       <Text className={`${activeName}`}>{name}</Text>
//       <View className={`${activeLine}`}></View>
//     </TouchableOpacity>
//   );
// };

// const Invoices = () => {
//   const id = useSelector(getActiveID);

//   const navigation = useNavigation();
//   const tab = [
//     {
//       id: 1,
//       name: 'Pending',
//     },
//     {id: 2, name: 'Complete'},
//   ];
//   return (
//     <ScreenWrapper>
//       <View className="h-full w-full">
//         <View className="w-[90%] h-full mx-auto mt-4 ">
//           <View className="w-full h-16 flex flex-row items-center justify-evenly">
//             {tab.map(d => {
//               return <Tab key={d?.id} active={d?.id} name={d?.name} id={id} />;
//             })}
//           </View>

//           {id === 1 ? (
//             <View className="w-full flex flex-col justify-center">
//               <CustomeFlatList
//                 renderData={INVOICEDATA?.invoices?.data}
//                 renderDisplay={item =>
//                   InvoiceList(item, (shopWidth = 100), navigation)
//                 }
//                 vertical
//               />
//             </View>
//           ) : null}
//           {id === 2 ? (
//             <View className="w-full flex flex-col justify-center ">
//               <CustomeFlatList
//                 renderData={INVOICEDATA?.invoices?.data}
//                 renderDisplay={item =>
//                   InvoiceList(item, (shopWidth = 100), navigation)
//                 }
//                 vertical
//               />
//             </View>
//           ) : null}
//         </View>
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default Invoices;
