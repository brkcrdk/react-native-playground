import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');
const SLIDER_HEIGHT = 5;
const SLIDER_WIDTH = width - 50;
const THUMB_HEIGHT = 20;
const THUMB_WIDTH = 20;

const CustomSlider = () => {
  const translateX = useSharedValue(0);
  const [posX, setX] = useState(0);
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
      left: posX - THUMB_WIDTH / 2,
      // left: SLIDER_WIDTH - THUMB_WIDTH / 2,
      height: THUMB_HEIGHT,
      width: THUMB_WIDTH,
      borderRadius: THUMB_HEIGHT / 2,
      backgroundColor: 'black',
    },
  });
  return (
    <TapGestureHandler
      onHandlerStateChange={(e) => {
        console.log(e.nativeEvent.x);
      }}>
      <View style={s.container}>
        <View style={s.slider} />
        <PanGestureHandler>
          <View style={s.thumb} />
        </PanGestureHandler>
      </View>
    </TapGestureHandler>
  );
};

export default CustomSlider;
