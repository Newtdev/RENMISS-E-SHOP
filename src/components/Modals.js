import React from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {Button, Dialog, Portal, Provider} from 'react-native-paper';
import {COLORS} from '../utils/Colors';
import Icon, {Icons} from './Icons';

export const ModalWrapper = ({
  children,
  showModal,
  materialCommunityIcon,
  okElement,
  cancelElement,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View
        className=" h-full w-full flex items-center justify-center mx-auto"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <View className="relative bg-slate-50 rounded-3xl w-[80%] px-5 py-7">
          <View className="items-center">
            <Icon
              type={Icons.MaterialCommunityIcons}
              name={materialCommunityIcon}
              color={COLORS.shop}
              size={25}
            />
          </View>
          <View className="py-5">{children}</View>
          <View className="flex flex-row space-x-8 absolute bottom-3 right-5">
          <View className="flex flex-row justify-end  space-x-4 pr-4">
            {okElement}
            {cancelElement}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const Modals = ({children}) => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          className="p-5 bg-slate-50">
          {children}

          <Dialog.Actions>
            <Button onPress={() => console.log('Cancel')}>Cancel</Button>
            <Button onPress={() => console.log('Ok')}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default ModalWrapper;
