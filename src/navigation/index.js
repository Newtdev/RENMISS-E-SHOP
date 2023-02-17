import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Market from '../screens/marketpage';
import Onboarding from '../screens/onboarding';

import SelectReason from '../screens/selectreason';
import Category from '../screens/category';
import Home from '../assets/homeIcon.svg';
import Chat from '../assets/chat.svg';
import Wallet from '../assets/wallet.svg';
import Shop from '../assets/shop.svg';
import More from '../assets/more.svg';
import RedShop from '../assets/redShop.svg';
import ActiveMore from '../assets/activeMore.svg';
import ActiveHome from '../assets/activeHome.svg';
import ActiveChat from '../assets/activeChat.svg';
import ActiveWallet from '../assets/activeWallet.svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import Shops from '../screens/shops';
import Filter from '../screens/filter';
import ShopDetails from '../screens/shop';
import Product from '../screens/product';
import WishList from '../screens/wishlist';

const Tab = createBottomTabNavigator();

const {Navigator, Screen} = createStackNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

const MainPageNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="eShop"
      activeColor="#b70000"
      inactiveColor="#fff"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarButton: props => {
          return <TouchableOpacity {...props} />;
        },
        tabBarStyle: {
          height: 70,
          display: 'flex',
          // flex: 1,
          // flexDirection: 'row',
          position: 'absolute',

          alignItems: 'center',
          // justifyContent: 'space-evenly',
          paddingVertical: 10,
          paddingHorizontal: 8,
          // paddingLeft: 20,
          // paddingRight: 20,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          backgroundColor: '#b70000',
        },

        tabBarLabel: ({focused, children, color}) => {
          return (
            <Text
              className={`text-white ${
                focused ? ' mt-1 text-center text-xs text-red-700' : ''
              }`}>
              {!focused ? null : children}
            </Text>
          );
        },

        tabBarLabelPosition: 'beside-icon',
        tabBarItemStyle: {
          height: 62,
          width: 76,
          paddingHorizontal: 1,
          paddingBottom: 2,
          borderRadius: 100,
          display: 'flex',
          color: '#fff',
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          //   marginTop: 20,
        },

        tabBarIcon: ({focused, color, size}) => {
          let IconName;
          if (route.name === 'Home') {
            return (
              <View
                className={`p-2.5 rounded-full ${
                  focused ? 'bg-white w-[74px] ml-4  ' : 'bg-[#FFFFFF19]'
                }`}>
                {focused ? (
                  <ActiveHome width={20} height={20} />
                ) : (
                  <Home width={20} height={20} />
                )}
              </View>
            );
          } else if (route.name === 'Chat') {
            return (
              <View
                className={`p-2.5 rounded-full ${
                  focused ? 'bg-white w-[78px]' : 'bg-[#FFFFFF19]'
                }`}>
                {focused ? (
                  <ActiveChat width={20} height={20} />
                ) : (
                  <Chat width={20} height={20} />
                )}
              </View>
            );
          } else if (route.name === 'Wallet') {
            return (
              <View
                className={`p-2.5 rounded-full ${
                  focused ? 'bg-white w-[80px] ml-4' : 'bg-[#FFFFFF19]'
                }`}>
                {focused ? (
                  <ActiveWallet width={20} height={20} />
                ) : (
                  <Wallet width={20} height={20} />
                )}
              </View>
            );
          } else if (route.name === 'eShop') {
            return (
              <View
                className={`p-2.5 rounded-full ${
                  focused
                    ? 'bg-white w-[74px] ml-3'
                    : 'bg-[#FFFFFF19] shadow-lg '
                }`}>
                {focused ? (
                  <RedShop width={20} height={20} />
                ) : (
                  <Shop width={20} height={20} />
                )}
              </View>
            );
          } else if (route.name === 'More') {
            return (
              <View
                className={`p-2.5 rounded-full ${
                  focused ? 'bg-white w-[74px] ml-2' : 'bg-[#FFFFFF19]'
                }`}>
                {focused ? (
                  <ActiveMore width={20} height={20} />
                ) : (
                  <More width={20} height={20} />
                )}
              </View>
            );
          }
        },
      })}
      //   screenOptions={{
      //     tabBarStyle: {
      //       height: 70,
      //       display: 'flex',
      //       flex: 1,
      //       flexDirection: 'row',
      //       alignItems: 'center',
      //       justifyContent: 'center',
      //       paddingVertical: 10,
      //       paddingHorizontal: 8,
      //       borderTopEndRadius: 20,
      //       borderTopStartRadius: 20,
      //       backgroundColor: '#b70000',
      //     },
      //     tabBarActiveBackgroundColor: 'blue',
      //     tabBarInactiveTintColor: 'yellow',
      //     tabBarLabelPosition: 'beside-icon',
      //     tabBarLabelStyle: {fontSize: 12, color: 'white'},
      //     tabBarItemStyle: {
      //       backgroundColor: 'green',
      //       height: 49,
      //       paddingHorizontal: 4,
      //       paddingBottom: 2,
      //       borderRadius: 100,
      //       display: 'flex',
      //       flexDirection: 'row',
      //       alignItems: 'center',
      //       marginTop: 20,
      //     },
      //           }}
    >
      <Tab.Screen name="Home" component={Onboarding} />
      <Tab.Screen name="Chat" component={Market} />
      <Tab.Screen name="Wallet" component={Shops} />
      <Tab.Screen name="eShop" component={Market} />
      <Tab.Screen name="More" component={Category} />
    </Tab.Navigator>
  );
};

const CustomNavigation = () => {
  // MARKET CUSTOM NAVIGATION
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Onboarding} />
      <Screen name="Reason" component={SelectReason} />
      {/* <Screen name="Category" component={Category} /> */}
      <Screen name="Market" component={MainPageNavigation} />
      <Screen name="Search" component={Filter} />
      <Screen name="Shop" component={ShopDetails} />
      <Screen name="Product" component={Product} />
      <Screen name="Wishlist" component={WishList} />
      {/* <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
    </Navigator>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default CustomNavigation;
