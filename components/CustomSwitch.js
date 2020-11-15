import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

import {useTheme} from '../hooks';
import Background from './Background';

const CustomSwitch = ({
  onChange = () => {},
  renderLabel = false,
  on = <Text>On</Text>,
  off = <Text>Off</Text>,
  disabled = false,
  activeColor,
  inactiveColor,
  checked = false,
  duration = 300,
}) => {
  const {currentTheme} = useTheme();
  const [active, setActive] = useState(checked);
  const [initialX, setInitialX] = useState(active ? 45 : 0);
  const translateX = useSharedValue(initialX);
  const animateOn = useSharedValue(-40);
  const animateOff = useSharedValue(5);

  const toggleSwitch = (e) => {
    if (State.END === e.nativeEvent.state && !disabled) {
      setActive(!active);
      onChange();
    }
  };

  useEffect(() => {
    if (active) {
      return (translateX.value = withTiming(45, {duration}));
    }
    return (translateX.value = withTiming(0, {duration}));
  }, [active, translateX, duration]);

  useEffect(() => {
    if (active) {
      return (animateOff.value = withTiming(-50, {
        duration: duration + 100,
        delay: 1,
      }));
    }
    return (animateOff.value = withTiming(5, {
      duration: duration + 100,
      delay: 1,
    }));
  }, [active, animateOff, duration]);

  useEffect(() => {
    if (active) {
      return (animateOn.value = withTiming(-40, {
        duration: duration + 100,
        delay: 1,
      }));
    }
    return (animateOn.value = withTiming(-100, {
      duration: duration + 100,
      delay: 1,
    }));
  }, [active, animateOn, duration]);

  const animatedTranslate = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  const animatedOn = useAnimatedStyle(() => {
    return {
      left: animateOn.value,
    };
  });
  const animatedOff = useAnimatedStyle(() => {
    return {
      right: animateOff.value,
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
    switchContainer: {
      flexDirection: 'row',
    },
    switch: {
      width: 20,
      height: 20,
      borderRadius: 25 / 2,
      backgroundColor: '#FFF',
    },
    text: {
      marginHorizontal: 10,
      position: 'absolute',
      color: '#fff',
      fontWeight: '900',
    },
    on: {
      left: -40,
    },
    off: {
      right: 5,
    },
  });

  const output0 = disabled
    ? currentTheme.switchBackground
    : inactiveColor || currentTheme.primary;

  const output1 = disabled
    ? currentTheme.switchBackground
    : activeColor || currentTheme.primary;

  return (
    <TapGestureHandler onHandlerStateChange={toggleSwitch} enabled={!disabled}>
      <Animated.View style={[s.container]}>
        <Background
          toggle={active}
          toValue={1}
          duration={duration}
          ranges={{
            inputRange: [0, 1],
            outputRange: [output0, output1],
          }}
        />
        <Animated.View style={[s.switchContainer, animatedTranslate]}>
          {renderLabel && (
            <Animated.View style={[s.text, animatedOn]}>{on}</Animated.View>
          )}
          <View style={s.switch} />
          {renderLabel && (
            <Animated.View style={[s.text, animatedOff]}>{off}</Animated.View>
          )}
        </Animated.View>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default CustomSwitch;
