import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {categoryData} from '../../lib';
import {HeaderWrapper, Button} from '../../sharedcomponent';

const TagButton = ({name, data, funct, color}) => {
  const [id, setId] = useState(color);
  //   console.log(id);

  return (
    <Pressable
      //   className="rounded-full flex w-40 my-2 flex-row items-center justify-center py-3 border "
      style={({pressed}) => [
        {
          backgroundColor: id ? '#b70000' : '#fff',
        },
        styles.wrapperCustom,
      ]}
      //   onPress={() => {
      //     console.log('pddd');
      //     // selectedCategory?.map(cur => {
      //     //   console.log(cur);
      //     // });
      //   }}
      onPress={
        () => {
          funct();
          // setId(;
        }

        // console.log(val);
      }>
      <Text className="text-black text-center text-sm ">{name}</Text>
    </Pressable>
  );
};

const Category = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [color, setColor] = useState(null);

  const checkFunct = category => {
    const deletedID = selectedCategory.findIndex(cur => cur.id === category.id);

    if (deletedID == -1) {
      setColor(category.id);
      setSelectedCategory([...selectedCategory, category]);
    } else {
      selectedCategory.splice(deletedID, 1);
      setColor(null);
    }
    // setColor(null);
    //   setSelectedCategory([...selectedCategory, category]);0
    //   console.log(b);

    // if (selectedCategory < 1) {
    //   return;
    // } else {
    // }
  };

  //   const getData = () => {
  //     if (selectedCategory < 1) {
  //     }
  //   };

  // SEARCH FOR CATERGORY
  const filterCatergory = () => {
    return categoryData?.filter(category => {
      return category.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  // RENDER THE RESULT OF THE CATEGORY AND CHECK IF IT'S THE SEARCHED RESULT IS AVAILABLE
  const renderTagButton = () => {
    let limitDataToTen = [];

    const filteredCategory = filterCatergory();
    if (filteredCategory.length === 0) {
      return (
        <Text className="text-gray-600 text-lg text-center">
          Opps! Category unavailable
        </Text>
      );
    }

    limitDataToTen = filteredCategory.slice(0, 11);
    return limitDataToTen?.map(category => {
      return (
        <TagButton
          key={category.id}
          name={category.name}
          data={category}
          funct={() => checkFunct(category)}
          color={color}
        />
      );
    });
  };

  const onSearch = e => {
    setSearch(e);
  };
  return (
    <View className="flex-1">
      <HeaderWrapper name="Select Category of your business or skills">
        <View className=" px-6 mt-4">
          <TextInput
            className="h-10 px-4 border border-[#dadada] rounded-full bg-[#dadada]"
            onChangeText={onSearch}
            value={search}
            placeholder="Search category"
            keyboardType="web-search"
          />
        </View>
        <View className="w-full py-4 px-2 flex flex-row flex-wrap justify-evenly">
          {renderTagButton()}
        </View>
        <View className=" mx-auto mt-6">
          <Button name="Done" onPress={() => navigation.navigate('Market')} />
        </View>
      </HeaderWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    width: 160,
    paddingVertical: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#E92626',

    // height: 59,
    marginVertical: 6,

    paddingHorizontal: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  //   logBox: {
  //     padding: 20,
  //     margin: 10,
  //     borderWidth: StyleSheet.hairlineWidth,
  //     borderColor: '#f0f0f0',
  //     backgroundColor: '#f9f9f9',
  //   },
});
export default Category;
