import {Pressable, Text, View} from 'react-native';
import {
  Button,
  NavigationHeaderWapper,
  ScreenWrapper,
} from '../../sharedcomponent';
import SelectDropdown from 'react-native-select-dropdown';
import DropDown from '../../assets/dropdown.svg';
import SearchIcon from '../../assets/search.svg';

const ShopFilterComponent = ({data}) => {
  return (
    <View className=" w-[95%] mx-auto">
      <View className="w-full h-[56px] flex flex-col justify-center items-center">
        <SelectDropdownComp data={data} />
      </View>
      <View className="w-full h-[56px]  flex flex-col justify-center items-center">
        <SearchDropdownComp data={data} />
      </View>
      <View className="flex flex-row items-end justify-center h-96  mt-12">
        <Button name="Search" onPress={() => console.log('send to the api')} />
      </View>
    </View>
  );
};
const ProductFilterComponent = () => {
  return <View className="h-full w-full bg-green-900"></View>;
};
const SelectDropdownComp = ({data}) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      renderDropdownIcon={() => {
        return <DropDown />;
      }}
      searchPlaceHolder="Select Shop"
      buttonStyle={{width: '95%', borderRadius: 4, backgroundColor: 'white'}}
      defaultButtonText="Select shop"
      buttonTextStyle={{textAlign: 'left', fontSize: 14}}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
  );
};
const SearchDropdownComp = ({data}) => {
  return (
    <SelectDropdown
      data={data}
      search
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      searchPlaceHolder="Search shop"
      renderSearchInputLeftIcon={() => {
        return <SearchIcon />;
      }}
      //   renderDropdownIcon={() => {
      //   }}
      buttonStyle={{width: '95%', borderRadius: 4, backgroundColor: 'white'}}
      defaultButtonText="Select shop"
      buttonTextStyle={{textAlign: 'left', fontSize: 14}}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
  );
};

const Filter = ({navigation}) => {
  //   const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  //   const charactersAZ = Array.from({length: 26}, (_, i) =>
  //     String.fromCharCode(65 + i),
  //   );
  const charactersAZ = Array.from({length: 26}, (_, i) =>
    String.fromCharCode(65 + i),
  ).map(letter => 'Block' + ' ' + letter);

  return (
    <ScreenWrapper
      content={
        <NavigationHeaderWapper name="Search" back={navigation.goBack} />
      }>
      <View>
        <View className="w-full h-16 mt-32 flex flex-row items-center justify-evenly">
          <Pressable className="">
            <Text className="text-red-700">Shops</Text>
            <View className="w-[18px] h-0.5 bg-[#b70000] mx-auto"></View>
          </Pressable>
          <Pressable>
            <Text>Products</Text>
          </Pressable>
        </View>
        <ShopFilterComponent data={charactersAZ} />
        {/* <ProductFilterComponent /> */}
      </View>
    </ScreenWrapper>
  );
};

export default Filter;
