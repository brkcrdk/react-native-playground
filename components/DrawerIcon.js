import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '../hooks';

const DrawerIcon = ({navigation, ...props}) => {
  const {currentTheme} = useTheme();
  return (
    <View marginTop={20} marginLeft={20} flex={0} {...props}>
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
