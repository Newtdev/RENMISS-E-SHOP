import React from 'react';
import {Pressable, View} from 'react-native';
import {Button} from 'react-native-paper';
import {COLORS} from '../utils/Colors';
import Icon, {Icons} from './Icons';

const BackButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon type={Icons?.FontAwesome5} name="arrow-left" color={COLORS.white} />
    </Pressable>
  );
};

export const RightHeaderButton = ({onPress, iconType, iconName}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon type={Icons.MaterialIcons} name={iconName} color={COLORS.white} />
    </Pressable>
  );
};

export const SubmitButton = ({children, name, onPress}) => {
  return (
    <Button
      style={{borderRadius: 15, height: 59}}
      contentStyle={{width: 'auto', height: 59}}
      mode="contained"
      disabled={false}
      loading={false}
      onPress={onPress}
      buttonColor={COLORS.shop}>
      {name}
    </Button>
  );
};
// export const IconButton = () => {
//   return <Icon type={Icons?.FontAwesome5} name="pen" color={COLORS.white} />;
// };

export default BackButton;
