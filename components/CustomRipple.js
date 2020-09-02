import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import Animated, {
  Value,
  event,
  cond,
  eq,
  Clock,
  set,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
  Easing,
} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
const CustomRipple = () => {
  const [pressPosition, setPressPosition] = useState({});
  const [opacity, setOpacity] = useState(1);
  const state = new Value(-1);
  const translateX = new Value(0);

  const handlePress = (e) => {
    // if (e && e.nativeEvent) {
    //   const {x, y} = e.nativeEvent;
    //   setPressPosition({x, y});
    // }
  };

  const runTiming = (clock, value, dest) => {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0),
    };

    const config = {
      duration: 5000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease),
    };

    return block([
      cond(
        clockRunning(clock),
        [
          // if the clock is already running we update the toValue, in case a new dest has been passed in
          set(config.toValue, dest),
        ],
        [
          // if the clock isn't running we reset all the animation params and start the clock
          set(state.finished, 0),
          set(state.time, 0),
          set(state.position, value),
          set(state.frameTime, 0),
          set(config.toValue, dest),
          startClock(clock),
        ]
      ),
      // we run the step here that is going to update position
      timing(clock, state, config),
      // if the animation is over we stop the clock
      cond(state.finished, debug('stop clock', stopClock(clock))),
      // we made the block return the updated position
      state.position,
    ]);
  };

  const clock = new Clock();

  const scaleUp = runTiming(clock, 0.3, 2.3);

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
