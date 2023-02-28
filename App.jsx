import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import CustomNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <NavigationContainer
      onStateChange={props => {
        // console.log(props);
      }}>
      <Provider store={store}>
        <CustomNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
