import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import RippleButton from './RippleButton';
import Text from './Text';
import {useTheme, useDefaultPage} from '../hooks';

const CustomDrawer = ({state, navigation, props}) => {
  const {currentTheme} = useTheme();
  const {defaultPage} = useDefaultPage();
  const s = StyleSheet.create({
    view: {
      backgroundColor: currentTheme.background,
    },
  });

  return (
    <DrawerContentScrollView {...props} style={s.view}>
      {state.routes.map((route, index) => {
        return (
          <RippleButton
            key={route.key}
            marginTop={10}
            marginLeft={20}
            marginRight={20}
            onPress={() => {
              navigation.navigate(route.name);
            }}>
            <Text color="#fff">
              {route.name} {defaultPage === route.name && '(Default)'}
            </Text>
          </RippleButton>
        );
      })}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
