import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {LongPressGestureHandler, State} from 'react-native-gesture-handler';
import {useTheme} from '../hooks';

const CustomRipple = ({children, onPress = () => {}, ...props}) => {
  const {currentTheme} = useTheme();
  const [pressPosition, setPressPosition] = useState({});
  const [size, setSize] = useState({});

  const maxScale = useSharedValue(0);
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (size) {
      const {width, height} = size;
      const scaleValue = Math.sqrt(width ** 2 + height ** 2);
      maxScale.value = Math.round(scaleValue * 0.1);
    }
  }, [maxScale, size]);

  const handleLayout = (e) => {
    if (e && e.nativeEvent) {
      const {height, width} = e.nativeEvent.layout;
      setSize({width, height});
    }
  };
  const handlePress = (event) => {
    if (event && event.nativeEvent) {
      const {state} = event.nativeEvent;
      if (state === State.END) {
        return onPress();
      }
    }
  };
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      const {x, y} = event;
      setPressPosition({x, y});
      ctx.maxScale = maxScale.value;
      scale.value = 0;
      opacity.value = 0;
    },
    onActive: (_, ctx) => {
      scale.value = withTiming(ctx.maxScale, {duration: 350});
      opacity.value = withTiming(0.3, {duration: 50});
    },
    onFinish: () => {
      opacity.value = withTiming(0);
      setTimeout(() => {
        scale.value = 0;
      }, 300);
    },
  });

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
      backgroundColor: currentTheme.primary,
      padding: 12,
      borderRadius: 5,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      ...props,
    },
    effect: {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      left: pressPosition.x - 10 || 0,
      top: pressPosition.y - 10 || 0,
      position: 'absolute',
      borderRadius: size.width,
      opacity: opacity.value,
      transform: [
        {
          scale: scale.value,
        },
      ],
    },
  });

  return (
    <LongPressGestureHandler
      onGestureEvent={gestureHandler}
      minDurationMs={1}
      onHandlerStateChange={handlePress}>
      <Animated.View style={s.container} onLayout={handleLayout}>
        <Animated.View style={[s.effect, animatedStyle]} />
        <View>{children}</View>
      </Animated.View>
    </LongPressGestureHandler>
  );
};

export default CustomRipple;
