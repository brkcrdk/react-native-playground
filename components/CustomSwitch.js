import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

import Background from './Background';

const CustomSwitch = ({
  onChange = () => {},
  renderLabel = false,
  on = <Text>On</Text>,
  off = <Text>Off</Text>,
  disabled = false,
}) => {
  const {currentTheme} = useTheme();
  const [active, setActive] = useState(true);

  const toggleSwitch = (e) => {
    if (State.END === e.nativeEvent.state && !disabled) {
      setActive(!active);
      onChange();
    }
  };

  const translateX = useSharedValue(0);

  useEffect(() => {
    if (active) {
      return (translateX.value = withTiming(45, {duration: 300}));
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

  return (
    <TapGestureHandler onHandlerStateChange={toggleSwitch} enabled={!disabled}>
      <Animated.View style={[s.container]}>
        <Background
          toggle={active}
          toValue={40}
          duration={300}
          ranges={{
            inputRange: [0, 40],
            outputRange: [currentTheme.switchBackground, currentTheme.primary],
          }}
        />
        <Animated.View style={[s.switchContainer, animatedTranslate]}>
          {renderLabel && <View style={[s.text, s.on]}>{on}</View>}
          <View style={s.switch} />
          {renderLabel && <View style={[s.text, s.off]}>{off}</View>}
        </Animated.View>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default CustomSwitch;
