/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {COLORS} from '../utils/Colors';
import SelectDropdown from 'react-native-select-dropdown';
import Icon, {Icons} from './Icons';

const Input = () => {
  return <></>;
};

export const SearchInput = ({placeholder}) => {
  return (
    <View className="my-2">
      <TextInput
        placeholder={placeholder}
        className="rounded-2xl bg-gray-100 border border-gray-400 shadow-inner p-3 h-11"
      />
    </View>
  );
};

export const CustomSelectDropdown = ({
  data,
  error,
  touched,
  search,
  onSelect,
}) => {
  return (
    <View className="my-2">
      <SelectDropdown
        data={data}
        onSelect={onSelect}
        // onSelect={(selectedItem, index) => {
        //   console.log(selectedItem, index);
        // }}
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
        renderDropdownIcon={() => (
          <Icon
            type={Icons.MaterialCommunityIcons}
            name="chevron-down"
            size={18}
          />
        )}
        buttonStyle={{
          height: 57,
          width: 'auto',
          padding: 5,
          borderColor: error && touched ? COLORS.shop : COLORS.gray,
          borderRadius: 15,
          borderStyle: 'solid',
          borderWidth: 1,
          backgroundColor: COLORS.white,
        }}
        buttonTextStyle={{
          textAlign: 'left',
        }}
        dropdownStyle={{
          textAlign: 'left',
          borderRadius: 15,
        }}
        rowTextStyle={{
          textAlign: 'left',
          paddingLeft: 15,
        }}
        selectedRowTextStyle={{
          fontWeight: 500,
          color: COLORS.shop,
        }}
        search={search}
        searchPlaceHolder={'Search list...'}
        renderSearchInputLeftIcon={() => (
          <Icon type={Icons.FontAwesome} name="search" size={18} />
        )}
      />
      {error && touched ? (
        <Text className="ml-2 text-xs text-red-600">{error}</Text>
      ) : null}
    </View>
  );
};

export const CustomTextInput = ({
  error,
  touched,
  autoFocus,
  placeholder,
  type,
  value,
  textContentType,
  selectTextOnFocus,
  secureTextEntry,
  scrollEnabled,
  multiline,
  numberOfLines,
  readOnly,
  onSubmitEditing,
  onKeyPress,
  onFocus,
  onChangeText,
  onChange,
  onBlur,
  maxLength,
  keyboardType,
}) => {
  return (
    <View className="my-2">
      <TextInput
        style={{
          height: multiline ? 100 : 57,
          padding: 20,
          borderColor: error && touched ? COLORS.shop : COLORS.gray,
          borderRadius: 15,
          borderStyle: 'solid',
          borderWidth: 1,
          backgroundColor: COLORS.white,
        }}
        autoFocus={autoFocus} //Boolean type, focuses the input on component
        placeholder={placeholder} //String type
        inputMode={type} //Determines which keyboard to open, e.g.numeric
        value={value} //The value to show for the text input.
        textContentType={textContentType} //String type, Give the keyboard and the system information about the expected semantic for IOS
        selectTextOnFocus={selectTextOnFocus} //Boolean type
        secureTextEntry={secureTextEntry} //Boolean type
        scrollEnabled={scrollEnabled} //Boolean type, used with multiline for IOS
        multiline={multiline} //Boolean type, to make the text input to be multiple lines likr textarea
        numberOfLines={numberOfLines} //Number type, Sets the number of lines for a TextInput. Use it with multiline set to true to be able to fill the lines for android
        readOnly={readOnly} //Boolean type
        onSubmitEditing={onSubmitEditing} //Callback that is called when the text input's submit button is pressed. ({nativeEvent: {text, eventCount, target}}) => void
        onKeyPress={onKeyPress} //({nativeEvent: {key: keyValue} }) => void
        onFocus={onFocus} //({nativeEvent: LayoutEvent}) => void
        onChangeText={onChangeText} //Function that passed changed text  as a single string argument to the callback handler
        onChange={onChange} //Callback that is called when the text input's text changes.
        onBlur={onBlur} //Callback that is called when the text input is blurred.
        maxLength={maxLength} //Limits the maximum number of characters that can be entered
        keyboardType={keyboardType} //Determines which keyboard to open, e.g.numeric
        // className="rounded-xl bg-gray-100 border border-gray-400 shadow-inner"
      />
      {error && touched ? (
        <Text className="ml-2 text-xs text-red-600">{error}</Text>
      ) : null}
    </View>
  );
};

export default Input;
