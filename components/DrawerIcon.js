import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../hooks';

const DrawerIcon = ({navigation, ...props}) => {
  const {currentTheme} = useTheme();
  const s = StyleSheet.create({
    container: {},
  });
  return (
    <View>
      <Icon
        name="menu"
        color={currentTheme.primary}
        size={35}
        onPress={() => {
          navigation && navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default DrawerIcon;
