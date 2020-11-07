import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const CustomSlider = () => {
  const s = StyleSheet.create({
    container: {},
    slider: {
      height: 5,
      width: width - 20,
      borderRadius: 2.5,
      backgroundColor: 'red',
    },
    thumb: {},
  });
  return (
    <View style={s.container}>
      <View style={s.slider} />
      <View style={s.thumb} />
    </View>
  );
};

export default CustomSlider;
