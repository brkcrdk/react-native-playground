import React, {useState, createContext} from 'react';
import {View, StyleSheet, Button, Easing} from 'react-native';
import Text from './Text';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
  delay,
  sequence,
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  LongPressGestureHandler,
} from 'react-native-gesture-handler';

const CustomRipple = () => {
  const [pressPosition, setPressPosition] = useState({});
  const [size, setSize] = useState({});
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  const handleLayout = (e) => {
    if (e && e.nativeEvent) {
      const {height, width} = e.nativeEvent.layout;
      setSize({width, height});
    }
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      const {x, y} = event;
      setPressPosition({x, y});
    },
    onActive: (event, ctx) => {
      console.log('active');
      scale.value = withTiming(50, {duration: 500});
      opacity.value = withTiming(0.3, {duration: 50});
    },
    onEnd: (event) => {
      // scale.value = withTiming(1);
      // console.log('end', event);
      opacity.value = withTiming(0);
      // scale.value = 0;
      setTimeout(() => {
        scale.value = 0;
      }, 300);
    },
    onFinish: (event) => {
      // scale.value = delay(1000, 0);
      // scale.value = withTiming(0);
      // console.log('finish', event);
    },
    onCancel: (event) => {
      console.log('cancel', event);
    },
    onFail: (event) => {
      // console.log('fail', {event});
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  const s = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#fff',
      padding: 10,
      width: 350,
      height: 350,
      overflow: 'hidden',
    },
    effect: {
      height: 20,
      width: 20,
      backgroundColor: '#ccc',
      left: pressPosition.x - 10 || 0,
      top: pressPosition.y - 10 || 0,
      position: 'absolute',
      borderRadius: size.width,
      opacity: opacity.value,
      transform: [
        {
          scale: scale.value,
        },
      ],
    },
  });
  return (
    <LongPressGestureHandler onGestureEvent={gestureHandler} minDurationMs={50}>
      <Animated.View style={s.container} onLayout={handleLayout}>
        <Animated.View style={[s.effect, animatedStyle]} />
        <View>
          <Text>CustomRipple component is here</Text>
          <Text>
            Press position: x is {pressPosition.x}, y is {pressPosition.y}
          </Text>
          <Text>
            Sizes: x is {size.height}, y is {size.width}
          </Text>
        </View>
      </Animated.View>
    </LongPressGestureHandler>
  );
};

export default CustomRipple;
