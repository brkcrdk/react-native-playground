import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '../hooks';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

import ColorInterpolation from './ColorInterpolation';

const CustomSwitch = () => {
  const {currentTheme} = useTheme();
  const [active, setActive] = useState(true);
  const toggleSwitch = (e) => {
    if (State.END === e.nativeEvent.state) {
      setActive(!active);
    }
  };

  const translateX = useSharedValue(0);

  useEffect(() => {
    if (active) {
      return (translateX.value = withTiming(40, {duration: 300}));
    }
    return (translateX.value = withTiming(0, {duration: 300}));
  }, [active, translateX]);

  const animatedTranslate = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const s = StyleSheet.create({
    container: {
      width: 75,
      height: 25,
      backgroundColor: currentTheme.switchBackground,
      borderRadius: 25,
      justifyContent: 'center',
      paddingHorizontal: 5,
      overflow: 'hidden',
    },
    switch: {
      width: 25,
      height: 20,
      borderRadius: 25 / 2,
      backgroundColor: '#FFF',
    },
  });

  return (
    <TapGestureHandler onHandlerStateChange={toggleSwitch}>
      <Animated.View style={[s.container]}>
        <ColorInterpolation toggle={active} />
        <Animated.View style={[s.switch, animatedTranslate]} />
      </Animated.View>
    </TapGestureHandler>
  );
};

export default CustomSwitch;
