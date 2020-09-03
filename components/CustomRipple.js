import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Text from './Text';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
  delay,
  sequence,
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  PanGestureHandler,
  LongPressGestureHandler,
} from 'react-native-gesture-handler';

const CustomRipple = () => {
  const [pressPosition, setPressPosition] = useState({});
  const [size, setSize] = useState({});
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

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
    scale.value = sequence(withTiming(50), delay(300, withTiming(0)));
    opacity.value = sequence(withTiming(0.2), delay(150, withTiming(0)));
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
  });

  const s = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#fff',
      padding: 10,
      width: 350,
      height: 350,
      overflow: 'hidden',
    },
    effect: {
      height: 20,
      width: 20,
      backgroundColor: '#ccc',
      left: pressPosition.x - 10 || 0,
      top: pressPosition.y - 10 || 0,
      position: 'absolute',
      borderRadius: size.width,
      opacity: 1,
      transform: [
        {
          scale: scale.value,
        },
      ],
    },
  });
  return (
    <TapGestureHandler onHandlerStateChange={handlePress}>
      <Animated.View style={s.container} onLayout={handleLayout}>
        <Animated.View style={[s.effect, animatedStyle]} />
        <View>
          <Text>CustomRipple component is here</Text>
          <Text>
            Press position: x is {pressPosition.x}, y is {pressPosition.y}
          </Text>
          <Text>
            Sizes: x is {size.height}, y is {size.width}
          </Text>
        </View>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default CustomRipple;
