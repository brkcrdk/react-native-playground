import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '../hooks';
const RippleButton = ({children, onPress, ...props}) => {
  const {currentTheme} = useTheme();
  const s = StyleSheet.create({
    button: {
      backgroundColor: currentTheme.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      padding: 12,
      ...props,
    },
  });
  return (
    <RectButton style={s.button} onPress={onPress}>
      {children}
    </RectButton>
  );
};

export default RippleButton;
