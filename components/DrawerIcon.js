import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../hooks';

const DrawerIcon = ({navigation, ...props}) => {
  const {currentTheme} = useTheme();
  const s = StyleSheet.create({
    container: {
      maxWidth: 35,
    },
  });
  return (
    <Icon
      style={s.container}
      name="menu"
      color={currentTheme.primary}
      size={35}
      onPress={() => {
        navigation && navigation.openDrawer();
      }}
    />
  );
};

export default DrawerIcon;
