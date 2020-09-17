import React, {useEffect, useRef, useCallback} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RotatingIcon = ({
  name = 'chevron-down',
  color = 'red',
  size = 16,
  isActive = false,
}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isActive) {
      rotateActive();
    }
    return rotateInActive();
  }, [isActive, rotateActive, rotateInActive]);

  const rotateActive = useCallback(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);
  const rotateInActive = useCallback(() => {
    Animated.timing(rotateAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);

  const animatedStyles = {
    view: {
      transform: [
        {
          rotate: rotateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg'],
          }),
        },
      ],
    },
  };

  const s = StyleSheet.create({
    icon: {
      transform: [
        {
          rotate: rotateAnim,
        },
      ],
    },
  });

  return (
    <View>
      <Animated.View style={[s.icon, animatedStyles.view]}>
        <Icon name={name} color={color} size={size} />
      </Animated.View>
    </View>
  );
};

export default RotatingIcon;
