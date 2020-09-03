import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import Animated, {Value, Clock} from 'react-native-reanimated';
import {runTiming} from '../utils';

import {TapGestureHandler, State} from 'react-native-gesture-handler';
const CustomRipple = () => {
  const [pressPosition, setPressPosition] = useState({});
  const [size, setSize] = useState({});
  const [scale, setScale] = useState(0);
  // const state = new Value(-1);
  // const translateX = new Value(0);

  const handleLayout = (e) => {
    if (e && e.nativeEvent) {
      const {height, width} = e.nativeEvent.layout;
      setSize({width, height});
    }
  };

  const handlePress = (e) => {
    if (e && e.nativeEvent) {
      const {x, y} = e.nativeEvent;
      setPressPosition({x, y});
    }
    console.log(State);
    const scaleUp = runTiming(clock, 1, 2, 500);
    setScale(scaleUp);
  };
  const clock = new Clock();

  const s = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#fff',
      padding: 10,
      width: 350,
      height: 350,
    },
    effect: {
      height: 20,
      width: 20,
      backgroundColor: 'red',
      left: pressPosition.x - 10 || 0,
      top: pressPosition.y - 10 || 0,
      position: 'absolute',
      borderRadius: size.width,
      opacity: 1,
      transform: [
        {
          scale,
        },
      ],
    },
  });

  return (
    <TapGestureHandler onHandlerStateChange={handlePress}>
      <View style={s.container} onLayout={handleLayout}>
        <Animated.View style={s.effect} />
        <View>
          <Text>CustomRipple component is here</Text>
          <Text>
            Press position: x is {pressPosition.x}, y is {pressPosition.y}
          </Text>
          <Text>
            Sizes: x is {size.height}, y is {size.width}
          </Text>
        </View>
      </View>
    </TapGestureHandler>
  );
};

export default CustomRipple;
