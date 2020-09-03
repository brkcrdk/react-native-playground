import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Text from './Text';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const CustomRipple = () => {
  const [pressPosition, setPressPosition] = useState({});
  const [size, setSize] = useState({});
  const scale = useSharedValue(0);

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
    scale.value = withTiming(3);
  };

  // const gestureHandler = useAnimatedGestureHandler({
  //   onStart: (_, ctx) => {
  //     ctx.startX = scale.value;
  //     console.log(ctx.scale);
  //   },
  //   onActive: (event, ctx) => {
  //     scale.value = ctx.startX + event.translationX;
  //   },
  //   onEnd: () => {
  //     scale.value = withSpring(0);
  //   },
  // });

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
          scale: scale.value,
        },
      ],
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    };
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
