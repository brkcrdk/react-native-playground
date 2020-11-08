import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import DrawerIcon from './DrawerIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme, useDefaultPage} from '../hooks';
import Text from './Text';

const Container = ({children, ...props}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {currentTheme} = useTheme();
  const {defaultPage, changeDefaultPage} = useDefaultPage();

  const s = StyleSheet.create({
    container: {
      backgroundColor: currentTheme.background,
      flex: 1,
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: currentTheme.background,
      paddingHorizontal: 10,
      paddingVertical: 5,
      shadowOffset: {
        width: 0,
        height: 15,
      },
      shadowRadius: 10,
      shadowOpacity: 1,
      elevation: 10,
    },
  });

  return (
    <View style={s.container}>
      <View style={s.header}>
        <DrawerIcon {...{navigation}} />
        <Text fontSize={20} marginRight={5}>
          {route.name}
        </Text>
        <MaterialIcons
          onPress={() => {
            changeDefaultPage(route.name);
          }}
          color={currentTheme.primary}
          name={defaultPage === route.name ? 'home' : 'home-edit'}
          size={30}
          style={s.homeBtn}
        />
        {/* <MaterialIcons
          color={currentTheme.primary}
          name="home-edit-outline"
          size={20}
        /> */}
      </View>
      <View style={s.content}>{children}</View>
    </View>
  );
};

export default Container;
