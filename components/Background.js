import React, {useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Animated} from 'react-native';

const Background = ({
  toValue = 1,
  ranges = {
    inputRange: [0, toValue],
    outputRange: ['red', 'blue'],
  },
  toggle = true,
  duration = 600,
}) => {
  const colorAnimation = useRef(new Animated.Value(0)).current;
  const {inputRange, outputRange} = ranges;

  const initial = useCallback(() => {
    Animated.timing(colorAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: false,
    }).start();
  }, [colorAnimation, duration]);

  const end = useCallback(() => {
    Animated.timing(colorAnimation, {
      toValue: toValue,
      duration,
      useNativeDriver: false,
    }).start();
  }, [colorAnimation, toValue, duration]);

  useEffect(() => {
    if (toggle) {
      return end();
    }
    return initial();
  }, [toggle, end, initial]);

  const animatedBg = {
    view: {
      backgroundColor: colorAnimation.interpolate({
        inputRange,
        outputRange,
        extrapolate: 'clamp',
      }),
    },
  };

  const s = StyleSheet.create({
    colorContainer: {
      zIndex: -1,
      ...StyleSheet.absoluteFillObject,
    },
  });

  return <Animated.View style={[s.colorContainer, animatedBg.view]} />;
};

export default Background;
