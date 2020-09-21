import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Text from './Text';
import CustomRipple from './CustomRipple';

const ColorInterpolation = () => {
  const [active, setActive] = useState(false);
  const colorAnim = useRef(new Animated.Value(0)).current;

  const toggleAnim = () => {
    setActive(!active);
  };
  useEffect(() => {
    console.log({colorAnim, active});
  }, [colorAnim, active]);

  const animatedStyle = {
    color: {
      backgroundColor: colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['red', 'black'],
      }),
    },
  };

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
      <CustomRipple onPress={toggleAnim}>
        <Text color="#fff">Interpolate Colors</Text>
      </CustomRipple>

      <Animated.View
        style={[s.colorContainer, {backgroundColor: animatedStyle}]}
      />
    </View>
  );
};

export default ColorInterpolation;
