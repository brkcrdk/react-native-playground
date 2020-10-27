import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

import Text from './Text';
import CustomRipple from './CustomRipple';

const ColorInterpolation = () => {
  const [active, setActive] = useState(false);

  const colorAnimation = useRef(new Animated.Value(0)).current;
  const textAnimation = useRef(new Animated.Value(0)).current;

  const handleToggle = () => {
    Animated.timing(colorAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(textAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const animatedBg = {
    view: {
      backgroundColor: textAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['red', 'yellow'],
        extrapolate: 'clamp',
      }),
    },
  };

  const s = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    colorContainer: {
      width: 100,
      height: 50,
      margin: 20,
    },
  });

  return (
    <View style={s.container}>
      <Text margin={20}>ColorInterpolation is here</Text>
      <CustomRipple onPress={handleToggle}>
        <Text color="#fff">Interpolate Colors</Text>
      </CustomRipple>
      <Animated.View style={[s.colorContainer, animatedBg.view]} />
    </View>
  );
};

export default ColorInterpolation;
