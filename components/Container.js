import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DrawerIcon from './DrawerIcon';
import {useTheme} from '../hooks';

const Container = ({children, ...props}) => {
  const navigation = useNavigation();
  const {currentTheme} = useTheme();
  const s = StyleSheet.create({
    container: {
      backgroundColor: currentTheme.background,
      flex: 1,
    },
    icon: {
      marginTop: 20,
      marginLeft: 20,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      ...props,
    },
  });
  return (
    <View style={s.container}>
      <DrawerIcon {...{navigation}} style={s.icon} />
      <View style={s.content}>{children}</View>
    </View>
  );
};

export default Container;
