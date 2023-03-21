import React, {useCallback, useState} from 'react';
import {useFormik, FormikProvider, FieldArray} from 'formik';
import ScreenWrapper from 'components/ScreenWrapper';
import {FlatList, Image, TextInput, View} from 'react-native';
import {COLORS} from 'utils/Colors';
import ImageCropPicker from 'react-native-image-crop-picker';
import {ScrollView} from 'react-native';
import {DIMENSION} from 'utils/Constant';
import {Text} from 'react-native-paper';
import {CustomButton, IconBtn, SubmitButton} from 'components/Buttons';
import {CustomSelectDropdown, CustomTextInput} from 'components/Inputs';
import {SingleAccordion} from 'components/Accordions';
import ImageUploadFunction from 'components/ImageUploads';

const UploadedImageBackground = ({
  item,
  fn,
  addNewImage,
  uploadSingleImage,
  addSingleImage,
}) => {
  const cardwidth = DIMENSION.width / 2;
  return (
    <View
      className="mx-2 mt-9"
      style={{width: cardwidth, backgroundColor: COLORS.white}}>
      <View className="h-48 rounded-lg flex flex-col items-center justify-center p-1 ">
        <View className=" mt-10 w-full flex flex-row justify-between ">
          {item?.index >= 1 ? (
            <IconBtn
              name="close-circle"
              color={COLORS.shop}
              size={20}
              onPress={() => fn(item.id)}
            />
          ) : null}
          {item?.index < 1 ? (
            <IconBtn
              name="plus"
              color={COLORS.black}
              size={20}
              onPress={item.id < 1 ? addNewImage : addSingleImage}
            />
          ) : null}
        </View>

        <Image
          source={{
            uri: `${item?.item || null}`,
          }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const DynamicInput = ({
  placeholder,
  onChangeText,
  type,
  value,
  error,
  touched,
  style,
}) => {
  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View className="my-2">
      <TextInput
        onChangeText={onChangeText}
        inputMode={type}
        value={value}
        placeholder={placeholder}
        className={style}
        placeholderTextColor={COLORS?.darkOverlayColor}
      />
      {error && touched ? (
        <Text className="mt-1 ml-2 text-xs text-red-600">{error}</Text>
      ) : null}
    </View>
  );
};
const CreateProduct = () => {
  const [expanded, setExpanded] = useState(true);
  const [uploadedImage, setUploadedImage] = useState([]);
  const [single, setSingle] = useState([]);
  const [uploadSingleImage, setUploadSingleImage] = useState(true);

  const removeItem = useCallback(
    id => {
      const remainingData = uploadedImage.filter((item, i) => i !== id - 1);
      setUploadedImage(remainingData);
    },
    [uploadedImage],
  );

  const Formik = useFormik({
    initialValues: {
      name: 'TShirt',
      location: 'Ottawa',
      categoryId: 'd2a7f8b6-f410-4dee-94e7-a875baacba88',
      description: 'In good condition',
      //   photos: '',
      imageUrl: null,
      photos: [],
      amount: '40000',
      variation: [{name: '', value: ''}],
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const handleSelect = (selectedItem, index) => {
    Formik.setFieldValue(selectedItem);
  };
  const handlePress = () => setExpanded(!expanded);

  const handleChooseSinglePhoto = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setSingle(image.path);
        setUploadSingleImage(false);
      })
      .catch(err => console.log(err));
  };

  const handleChooseMultiplePhoto = () => {
    ImageCropPicker.openPicker({
      multiple: true,
    })
      .then(image => {
        let imageArr = [];

        image.forEach((data, i) => {
          imageArr.push(data.path);
        });
        setUploadedImage(imageArr);
      })
      .catch(err => console.log(err));
  };

  const SubmitProductInfo = () => {
    console.log('submit');
  };

  return (
    <FormikProvider value={Formik}>
      <ScreenWrapper>
        <ScrollView>
          <View className="px-4">
            <View className="flex flex-col justify-evenly w-full">
              <CustomTextInput
                placeholder="Enter shop name"
                type="text"
                value={Formik.values?.name}
                onChangeText={Formik.handleChange('name')}
                error={Formik.errors?.name}
                touched={Formik.touched?.name}
              />
              <CustomTextInput
                placeholder="Enter product price"
                type="tel"
                value={Formik.values.amount}
                onChangeText={Formik.handleChange('amount')}
                error={Formik.errors?.amount}
                touched={Formik.touched?.amount}
              />
              <View className="mt-3">
                <CustomTextInput
                  placeholder="Description"
                  type="text"
                  value={Formik.values?.description}
                  onChangeText={Formik.handleChange('description')}
                  onBlur={Formik.handleBlur('description')}
                  error={Formik.errors?.description}
                  touched={Formik.touched?.description}
                  multiline={true}
                  numberOfLines={4}
                />
              </View>
              <View className="mt-3">
                {/* <SelectDropdownComp
                  data={['James', 'John']}
                  onSelect={handleSelect}
                /> */}
                <CustomSelectDropdown
                  data={['James', 'John']}
                  search={''}
                  onSelect={Formik.handleChange('categoryId')}
                  error={Formik.errors?.serviceType}
                  touched={Formik.touched?.serviceType}
                />
              </View>
            </View>

            <FieldArray
              name="variation"
              render={({remove, push}) => (
                <SingleAccordion handlePress={handlePress} expanded={expanded}>
                  <View
                    className="w-full rounded-md mt-4"
                    style={{backgroundColor: COLORS.gray}}>
                    {Formik.values.variation.map((d, id) => (
                      <View className="w-full  flex flex-row items-center justify-evenly">
                        <DynamicInput
                          placeholder="Name"
                          type="text"
                          value={Formik.values?.variation[id].name}
                          onChangeText={Formik.handleChange(
                            `variation[${id}].name`,
                          )}
                          error={Formik.errors?.name}
                          touched={Formik.touched?.name}
                          style="bg-white mx-auto w-32 px-4 py-2 rounded-lg text-black"
                        />
                        <DynamicInput
                          placeholder="Value"
                          type="text"
                          value={Formik.values?.variation[id].value}
                          onChangeText={Formik.handleChange(
                            `variation[${id}].value`,
                          )}
                          error={Formik.errors?.name}
                          touched={Formik.touched?.name}
                          style="bg-white mx-auto w-full w-32 px-4 py-2 rounded-lg text-black"
                        />

                        <IconBtn
                          name="close-circle"
                          size={24}
                          onPress={() => remove({name: '', value: ''})}
                        />
                      </View>
                    ))}
                    <View className="mt-auto flex flex-row justify-between">
                      <CustomButton
                        style="w-36 py-0 px-0 rounded text-black"
                        name="Add option"
                        icon="plus"
                        bg={COLORS.gray}
                        fn={() => push({name: '', value: ''})}
                        disablebtn={
                          Formik.values?.variation?.length === 5 ? true : false
                        }
                      />
                      <CustomButton
                        style="w-24 py-0 px-0 rounded text-black bg-transparent"
                        name="Done"
                        bg={COLORS?.social}
                      />
                    </View>
                  </View>
                </SingleAccordion>
              )}
            />
            <View className="w-full flex flex-row items-center">
              {single.length < 1 ? (
                <ImageUploadFunction
                  name="Primary Image"
                  values={Formik.values.imageUrl}
                  handleChoosePhoto={handleChooseSinglePhoto}
                />
              ) : null}

              {uploadedImage.length < 1 ? (
                <ImageUploadFunction
                  name="Upload other images"
                  values={Formik.values.photos}
                  handleChoosePhoto={handleChooseMultiplePhoto}
                  disabledbtn={uploadSingleImage}
                />
              ) : (
                <View className="bg-white  w-full rounded-md flex flex-row items-center justify-center">
                  <Text className="font-bold text-lg">Add images</Text>
                  <IconBtn
                    name="plus-circle"
                    color={COLORS?.wallet}
                    size={30}
                    onPress={handleChooseMultiplePhoto}
                  />
                </View>
              )}
            </View>
            <View className="w-full flex flex-row items-center mb-6 pb-4">
              <FlatList
                data={[single, ...uploadedImage]}
                extraData={uploadedImage}
                renderItem={item => (
                  <UploadedImageBackground
                    item={item}
                    fn={() => removeItem(item.index)}
                    addNewImage={handleChooseMultiplePhoto}
                    addSingleImage={handleChooseSinglePhoto}
                    uploadSingleImage={uploadSingleImage}
                  />
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
              />
            </View>
            <SubmitButton name="Submit" onPress={SubmitProductInfo} />
          </View>
        </ScrollView>
      </ScreenWrapper>
    </FormikProvider>
  );
};

export default CreateProduct;
