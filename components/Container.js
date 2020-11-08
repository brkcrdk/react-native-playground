import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
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
    header: {
      borderWidth: 1,
      borderColor: 'transparent',
      borderBottomColor: 'red',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  });
  return (
    <View style={s.container}>
      <View style={s.header}>
        <DrawerIcon {...{navigation}} style={s.icon} />
        <Text>Header</Text>
      </View>
      <View style={s.content}>{children}</View>
    </View>
  );
};

export default Container;
