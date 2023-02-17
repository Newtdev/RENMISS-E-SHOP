import {View} from 'react-native';
import {ScrollView} from 'react-native';
import {NavigationHeaderWapper, ScreenWrapper} from '../../sharedcomponent';
import {ProductCard} from '../shop/Shop';

const WishList = ({navigation}) => {
  return (
    <ScreenWrapper
      content={
        <NavigationHeaderWapper name="Product" back={navigation.goBack} />
      }>
      <ScrollView>
        <View>
          <ProductCard {...navigation} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default WishList;
