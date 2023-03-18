import React from 'react';
import {Pressable, View} from 'react-native';
import {Button, IconButton, SegmentedButtons} from 'react-native-paper';
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

export const Tab = ({value, setValue, data}) => {
  // const style = {borderRadius: 5, color: 'red'};
  return (
    <SegmentedButtons value={value} onValueChange={setValue} buttons={data} />
  );
};
export const CustomButton = ({
  name,
  fn,
  style = 'w-full mx-auto py-2 rounded-[10px] font-bold',
  bg = COLORS.shop,
  icon,
  disablebtn,
}) => (
  <Button
    mode="contained"
    disabled={disablebtn}
    icon={icon}
    style={{backgroundColor: bg}}
    className={style}
    onPress={fn}>
    {name}
  </Button>
);

export const IconBtn = ({name, color = COLORS.shop, size = 20, onPress}) => (
  <IconButton icon={name} iconColor={color} size={size} onPress={onPress} />
);

export default BackButton;
