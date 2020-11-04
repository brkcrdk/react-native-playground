import React, {useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Animated} from 'react-native';

const Background = ({
  range = {start: 0, end: 1},
  colors = {start: 'red', end: 'blue'},
  toggle = true,
}) => {
  const colorAnimation = useRef(new Animated.Value(0)).current;

  const initial = useCallback(() => {
    Animated.timing(colorAnimation, {
      toValue: range.start,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [colorAnimation, range.start]);

  const end = useCallback(() => {}, []);

  useEffect(() => {
    const closeAnim = () => {
      Animated.timing(colorAnimation, {
        toValue: range.start,
        duration: 600,
        useNativeDriver: false,
      }).start();
    };

    const openAnim = () => {
      Animated.timing(colorAnimation, {
        toValue: range.end,
        duration: 600,
        useNativeDriver: false,
      }).start();
    };
    // if (toggle) {
    //   return openAnim();
    // }
    return closeAnim();
  }, [toggle, colorAnimation, range.start, range.end]);

  const animatedBg = {
    view: {
      backgroundColor: colorAnimation.interpolate({
        inputRange: [range.start, range.end],
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
