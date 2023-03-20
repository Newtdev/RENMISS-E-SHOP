import React from 'react';
import {Snackbar} from 'react-native-paper';
import {COLORS} from '../utils/Colors';

const CustomSnackbar = ({visible, action, onDismissSnackBar, message}) => {
  //   const [visible, setVisible] = React.useState(false);
  //   const onToggleSnackBar = () => setVisible(!visible)
  //   const onDismissSnackBar = () => setVisible(false);
  return (
    <>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        wrapperStyle={{position: 'absolute', top: 0, zIndex: 9999}}
        style={{
          borderRadius: 15,
        }}
        action={action}>
        {message}
      </Snackbar>
    </>
  );
};

export default CustomSnackbar;
