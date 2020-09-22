import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Text from './Text';
import CustomRipple from './CustomRipple';

const ColorInterpolation = () => {
  const [active, setActive] = useState(false);

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
      <CustomRipple
        onPress={() => {
          setActive(!active);
        }}>
        <Text color="#fff">Interpolate Colors</Text>
      </CustomRipple>

      <Animated.View style={[s.colorContainer]} />
    </View>
  );
};

export default ColorInterpolation;
