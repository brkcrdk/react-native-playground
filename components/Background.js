import React, {useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Animated} from 'react-native';

const Background = ({
  toValue = 1,
  range = {start: 0, end: 1},
  colors = {start: 'red', end: 'blue'},
  toggle = true,
}) => {
  const colorAnimation = useRef(new Animated.Value(0)).current;

  const initial = useCallback(() => {
    Animated.timing(colorAnimation, {
      toValue: 0,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [colorAnimation]);

  const end = useCallback(() => {
    Animated.timing(colorAnimation, {
      toValue: toValue,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [colorAnimation, toValue]);

  useEffect(() => {
    if (toggle) {
      return initial();
    }
    return end();
  }, [toggle, end, initial]);

  const animatedBg = {
    view: {
      backgroundColor: colorAnimation.interpolate({
        inputRange: [0, toValue],
        outputRange: [colors.start, colors.end],
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
