import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  interpolateColors,
  withTiming,
} from 'react-native-reanimated';
import Text from './Text';
import CustomRipple from './CustomRipple';

const ColorInterpolation = () => {
  const [active, setActive] = useState(false);
  const color = useSharedValue(0);

  const handleToggle = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      return (color.value = withTiming(1, {duration: 500}));
    }
    return (color.value = withTiming(0, {duration: 500}));
  }, [active, color]);

  const customColor = interpolateColors(color.value, {
    inputRange: [0, 0.5, 1],
    outputColorRange: ['#333', '#eee', '#7e7'],
  });

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

      <Animated.View
        style={[s.colorContainer, {backgroundColor: customColor}]}
      />
    </View>
  );
};

export default ColorInterpolation;
