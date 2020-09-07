import React, {useRef} from 'react';
import {Pressable, Animated, StyleSheet} from 'react-native';

import {useTheme} from '../hooks';

const Button = ({
  children,
  onPress = () => {
    return alert('pressed');
  },
  onLongPress,
  style,
  ...props
}) => {
  const {currentTheme} = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const s = StyleSheet.create({
    view: {
      padding: 12,
      borderRadius: 5,
      backgroundColor: currentTheme.primary,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [
        {
          scale: scaleAnim,
        },
      ],
      ...style,
    },
  });

  const onPressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.95,
      duration: 200,
      useNativeDriver: true,
    }).start();
    props.onPressIn;
  };

  const onPressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const animatedStyles = {
    view: {
      opacity: scaleAnim.interpolate({
        inputRange: [0.95, 1],
        outputRange: [0.6, 1],
      }),
    },
  };
  return (
    <Pressable {...{onPress, onLongPress, onPressIn, onPressOut, props}}>
      <Animated.View style={[s.view, animatedStyles.view]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

export default Button;
