import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import Animated, {Value, Clock} from 'react-native-reanimated';
import {runTiming} from '../utils';

import {TapGestureHandler, State} from 'react-native-gesture-handler';
const CustomRipple = () => {
  const [pressPosition, setPressPosition] = useState({});
  const [opacity, setOpacity] = useState(1);
  const state = new Value(-1);
  const translateX = new Value(0);

  const handlePress = (e) => {
    if (e && e.nativeEvent) {
      const {x, y} = e.nativeEvent;
      setPressPosition({x, y});
    }
  };

  const clock = new Clock();

  const scaleUp = runTiming(clock, 0.3, 2.3, 500);

  const s = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#fff',
      padding: 10,
      width: 200,
      height: 200,
    },
    effect: {
      height: 20,
      width: 20,
      backgroundColor: 'red',
      left: pressPosition.x - 10 || 0,
      top: pressPosition.y - 10 || 0,
      position: 'absolute',
      opacity,
      transform: [
        {
          scale: scaleUp,
        },
      ],
    },
  });

  return (
    <TapGestureHandler onHandlerStateChange={handlePress}>
      <View style={s.container}>
        <Animated.View style={s.effect} />
        <View>
          <Text>CustomRipple component is here</Text>
          <Text>
            x is {pressPosition.x}, y is {pressPosition.y}
          </Text>
        </View>
      </View>
    </TapGestureHandler>
  );
};

export default CustomRipple;
