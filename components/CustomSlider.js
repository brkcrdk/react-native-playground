import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
const {width} = Dimensions.get('window');

const CustomSlider = () => {
  const SLIDER_HEIGHT = 5;
  const SLIDER_WIDTH = width - 20;
  const THUMB_HEIGHT = 20;
  const THUMB_WIDTH = 20;
  const s = StyleSheet.create({
    container: {},
    slider: {
      height: SLIDER_HEIGHT,
      width: SLIDER_WIDTH,
      borderRadius: SLIDER_HEIGHT / 2,
      backgroundColor: 'red',
    },
    thumb: {
      position: 'absolute',
      ...StyleSheet.absoluteFillObject,
      top: (SLIDER_HEIGHT - THUMB_HEIGHT) / 2,
      left: 20,
      height: THUMB_HEIGHT,
      width: THUMB_WIDTH,
      borderRadius: THUMB_HEIGHT / 2,
      backgroundColor: 'black',
    },
  });
  return (
    <View style={s.container}>
      <View style={s.slider} />
      <View style={s.thumb} />
    </View>
  );
};

export default CustomSlider;
