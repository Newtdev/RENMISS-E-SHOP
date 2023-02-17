import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import CustomNavigation from './src/navigation';

const App = () => {
  return (
    <NavigationContainer
      onStateChange={props => {
        // console.log(props);
      }}>
      <CustomNavigation />
    </NavigationContainer>
  );
};

export default App;
