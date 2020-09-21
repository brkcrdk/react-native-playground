import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import CustomRipple from './CustomRipple';

const ColorInterpolation = () => {
  const s = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    colorContainer: {
      backgroundColor: 'red',
      width: 100,
      height: 50,
      margin: 20,
    },
  });
  return (
    <View style={s.container}>
      <Text margin={20}>ColorInterpolation is here</Text>
      <CustomRipple>
        <Text color="#fff">Interpolate Colors</Text>
      </CustomRipple>
      <View style={s.colorContainer} />
    </View>
  );
};

export default ColorInterpolation;
