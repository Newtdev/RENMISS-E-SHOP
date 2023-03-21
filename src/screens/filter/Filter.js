/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {CustomSelectDropdown, CustomTextInput} from '../../components/Inputs';
import ScreenWrapper from '../../components/ScreenWrapper';
import {SegmentedButtons} from 'react-native-paper';
import {useFormik} from 'formik';
import {SubmitButton} from '../../components/Buttons';
import RatingStars from '../../components/Rating';
import {useNavigation} from '@react-navigation/native';

const ShopFilterComponent = ({blockLetter}) => {
  const {handleChange, handleSubmit, setSubmitting} = useFormik({
    initialValues: {
      blockAlpha: '',
      shopNumber: '',
    },
    onSubmit: values => {
      setSubmitting(true);
      //   Pass data to API
      console.log(values.blockAlpha.replace('Block', ''));
      console.log(values.shopNumber);
    },
  });

  return (
    <View className="flex flex-col justify-between h-full mb-[-30]">
      <View className="flex-none">
        <CustomSelectDropdown
          data={blockLetter}
          search={true}
          onSelect={handleChange('blockAlpha')}
          defaultButtonText={'Select block'}
        />

        <CustomTextInput
          placeholder={'Enter shop number'}
          type="numeric"
          onChangeText={handleChange('shopNumber')}
        />
      </View>

      <View className="flex-initial w-full">
        <SubmitButton name="Search" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const ProductFilterComponent = ({navigation}) => {
  const [serviceCategory, setServiceCategory] = React.useState([]);
  const [ratings, setRating] = React.useState(0);
  // const navigate = useNavigation();
  const navigate = useNavigation();
  React.useEffect(() => {
    const categories = [
      {
        name: 'Web design',
        createdAt: '2023-03-03T13:54:21.655Z',
        updatedAt: '2023-03-03T13:54:21.655Z',
        id: '6401fc0dd14d03eae16a3abe1',
      },
      {
        name: 'Plumbing Service',
        createdAt: '2023-03-03T13:54:21.655Z',
        updatedAt: '2023-03-03T13:54:21.655Z',
        id: '6401fc0dd14d03eae16a3abe2',
      },
      {
        name: 'Automobile Service',
        createdAt: '2023-03-03T13:54:21.655Z',
        updatedAt: '2023-03-03T13:54:21.655Z',
        id: '6401fc0dd14d03eae16a3abe',
      },
    ];
    categories.map((item, i) => {
      setServiceCategory(current => [...current, item.name]);
    });
  }, []);

  const {handleChange, handleSubmit, setSubmitting} = useFormik({
    initialValues: {
      productCategory: '',
      productPriceFrom: '',
      productPriceTo: '',
    },
    onSubmit: values => {
      setSubmitting(true);
      //   Pass data to API
      console.log(values);
      console.log(ratings);
      navigate.navigate('ServiceProviders');
    },
  });

  const ratingCount = rating => {
    setRating(rating);
  };

  return (
    <View className="flex flex-col justify-between h-full mb-[-30]">
      <View className="flex-none space-y-4">
        <View>
          <View className="w-full items-left border-b border-b-gray-400 py-1 px-1 mb-2">
            <Text className="text-md">Product Category</Text>
          </View>
          <CustomSelectDropdown
            data={serviceCategory}
            search={true}
            onSelect={handleChange('productCategory')}
            defaultButtonText={'Select category'}
          />
        </View>
        <View>
          <View className="w-full items-left border-b border-b-gray-400 py-1 px-1 mb-2">
            <Text className="text-md">Product Price (N)</Text>
          </View>
          <View className="flex flex-row space-x-4">
            <View className="flex-1">
              <CustomTextInput
                placeholder={'From'}
                type="numeric"
                onChangeText={handleChange('productPriceFrom')}
                label="From"
              />
            </View>
            <View className="flex-1">
              <CustomTextInput
                placeholder={'To'}
                type="numeric"
                onChangeText={handleChange('productPriceTo')}
                label="To"
              />
            </View>
          </View>
        </View>
        <View>
          <View className="w-full items-left border-b border-b-gray-400 py-1 px-1 mb-2">
            <Text className="text-md">Product Rating</Text>
          </View>
          <View className="flex flex-row items-center justify-center">
            <RatingStars
              size={25}
              isDisabled={false}
              ratingCount={ratingCount}
            />
          </View>
        </View>
      </View>

      <View className="flex-initial w-full">
        <SubmitButton name="Search" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const Filter = ({navigation}) => {
  const charactersAZ = Array.from({length: 26}, (_, i) =>
    String.fromCharCode(65 + i),
  ).map(letter => 'Block' + ' ' + letter);

  // for (let index = 0; index <= 40000; index++) {
  //   const element = index;
  //   // console.log(element)
  // }
  const [buttonValue, setButtonValue] = React.useState('shops');
  return (
    <ScreenWrapper>
      <SafeAreaView>
        <View className="space-y-5 h-full">
          <View className="mt-5">
            <SegmentedButtons
              value={buttonValue}
              onValueChange={setButtonValue}
              buttons={[
                {
                  value: 'shops',
                  label: 'Shops',
                  checkedColor: '#b70000',
                  showSelectedCheck: true,
                  style: {
                    borderWidth: 0,
                  },
                },
                {
                  value: 'products',
                  label: 'Products',
                  checkedColor: '#b70000',
                  showSelectedCheck: true,
                  style: {
                    borderWidth: 0,
                  },
                },
              ]}
              density="medium"
              theme={{
                roundness: 2,
                colors: {
                  primary: '#b70000',
                  background: '#b70000',
                },
              }}
            />
          </View>
          {buttonValue === 'shops' ? (
            <View>
              <ShopFilterComponent blockLetter={charactersAZ} />
            </View>
          ) : (
            <View>
              <ProductFilterComponent />
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScreenWrapper>
  );
};

export default Filter;
