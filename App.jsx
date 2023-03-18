import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CustomNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Onboarding from './src/screens/onboarding';
import InvoiceDetails from './src/screens/invoice-details/InvoiceDetails';
import SelectReason from './src/screens/selectreason';
import Filter from './src/screens/filter';
import ShopDetails from './src/screens/shop';
import Shops from './src/screens/shops';
import Product from './src/screens/product';
import WishList from './src/screens/wishlist';
// import Invoices from './src/screens/invoices';
import ServicesCategory from './src/screens/services/ServicesCategory';
import CreateShop from './src/screens/createshop';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Market from './src/screens/marketpage';
import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';

import Home from './src/assets/homeIcon.svg';
import Chat from './src/assets/chat.svg';
import Wallet from './src/assets/wallet.svg';
import Shop from './src/assets/shop.svg';
import More from './src/assets/more.svg';
import RedShop from './src/assets/redShop.svg';
import ActiveMore from './src/assets/activeMore.svg';
import ActiveHome from './src/assets/activeHome.svg';
import ActiveChat from './src/assets/activeChat.svg';
import ActiveWallet from './src/assets/activeWallet.svg';
import HeaderWrapper from './src/components/HeaderWrapper';

import Back from './src/assets/nine.png';
import BackButton, {EditButton} from './src/components/Buttons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
      })}>
      <Tab.Screen name="Home" component={Onboarding} />
      <Tab.Screen name="Chat" component={Market} />
      <Tab.Screen name="Wallet" component={Shops} />
      <Tab.Screen name="eShop" component={Market} />
      {/* <Tab.Screen name="More" component={Category} /> */}
      <Tab.Screen name="Create-shop" component={CreateShop} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer
      onStateChange={props => {
        // console.log(props);
      }}>
      <Provider store={store}>
        <CustomNavigation />
        {/* <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#b70000',
            },
            headerBackTitleVisible: false,
            headerBackImage: () => (
                <Image source={Back} resizeMode="contain" className="h-20 w-20 "/>
            ),
          }}>
          <Stack.Screen name="Home" component={Onboarding} />
          <Stack.Screen name="invoice" component={InvoiceDetails} />
          <Stack.Screen name="Reason" component={SelectReason} />
          <Stack.Screen name="Market" component={MainPageNavigation} />
          <Stack.Screen name="Search" component={Filter} />
          <Stack.Screen name="Shop Details" component={ShopDetails} />
          <Stack.Screen name="Shop" component={Shops} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Wishlist" component={WishList} />
          <Stack.Screen name="invoice-management" component={Invoices} />
          <Stack.Screen
            name="ServicesCategory"
            component={ServicesCategory}
            options={{
              headerShown: true,
              headerLeft: () => <BackButton />,
              headerRight: () => <EditButton />,
              headerStyle: {
                backgroundColor: '#b70000',
                color: 'white'
              },
              headerTintColor: 'white'
            }}
          />
          <Tab.Screen name="Create-shop" component={CreateShop} />
        </Stack.Navigator> */}
      </Provider>
    </NavigationContainer>
  );
};

export default App;
