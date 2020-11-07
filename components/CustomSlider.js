import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
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
      height: THUMB_HEIGHT,
      width: THUMB_WIDTH,
      borderRadius: THUMB_HEIGHT / 2,
      backgroundColor: 'black',
    },
  });

  const animatedThumb = useAnimatedStyle(() => {
    return {
      left: translateX.value,
    };
  });

  return (
    <TapGestureHandler
      onHandlerStateChange={({nativeEvent: {x}}) => {
        const toValue = x - THUMB_WIDTH / 2;
        return (translateX.value = withTiming(toValue, {duration: 1000}));
      }}>
      <View style={s.container}>
        <View style={s.slider} />
        <PanGestureHandler>
          <Animated.View style={[s.thumb, animatedThumb]} />
        </PanGestureHandler>
      </View>
    </TapGestureHandler>
  );
};

export default CustomSlider;
