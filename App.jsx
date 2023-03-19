import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  if (__DEV__) {
    try {
      const ignoreWarns = [
        'EventEmitter.removeListener',
        '[fuego-swr-keys-from-collection-path]',
        'Setting a timer for a long period of time',
        'ViewPropTypes will be removed from React Native',
        'AsyncStorage has been extracted from react-native',
        "exported from 'deprecated-react-native-prop-types'.",
        'Non-serializable values were found in the navigation state.',
        'VirtualizedLists should never be nested inside plain ScrollViews',
      ];
      const warn = console.warn;
      console.warn = (...arg) => {
        for (const warning of ignoreWarns) {
          if (arg[0].startsWith(warning)) {
            return;
          }
        }
        warn(...arg);
      };
      LogBox.ignoreLogs(ignoreWarns);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <NavigationContainer>
      <Provider store={store}>
        <CustomNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
