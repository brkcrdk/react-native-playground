import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DrawerIcon from './DrawerIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../hooks';
import Text from './Text';

const Container = ({children, ...props}) => {
  const navigation = useNavigation();
  const {currentTheme} = useTheme();
  const s = StyleSheet.create({
    container: {
      backgroundColor: currentTheme.background,
      flex: 1,
    },
    icon: {
      borderWidth: 1,
      borderColor: 'red',
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
      backgroundColor: currentTheme.background,
      paddingVertical: 5,
    },
  });
  return (
    <View style={s.container}>
      <View style={s.header}>
        <DrawerIcon {...{navigation}} style={s.icon} />
        <Text color={currentTheme.text}>Header</Text>
        <View />
      </View>
      <View style={s.content}>{children}</View>
    </View>
  );
};

export default Container;
