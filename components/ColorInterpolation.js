import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

import Text from './Text';
import CustomRipple from './CustomRipple';

const ColorInterpolation = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  const s = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    colorContainer: {
      width: 100,
      backgroundColor: 'red',
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

      <Animated.View style={[s.colorContainer]} />
    </View>
  );
};

export default ColorInterpolation;
