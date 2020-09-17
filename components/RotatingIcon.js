import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {withTiming, useSharedValue} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

const RotatingIcon = ({
  name = 'chevron-down',
  color = 'red',
  size = 16,
  isActive = false,
}) => {
  const iconRotate = useSharedValue(0);

  useEffect(() => {
    if (isActive) {
      return (iconRotate.value = withTiming(90, {duration: 300}));
    }
    return (iconRotate.value = withTiming(0, {duration: 300}));
  }, [isActive, iconRotate]);

  const rotateDegree = `${iconRotate.value}deg`;

  const s = StyleSheet.create({
    icon: {
      color: 'red',
      transform: [
        {
          rotate: rotateDegree,
        },
      ],
    },
  });

  return (
    <View>
      <Animated.View style={s.icon}>
        <Icon name={name} color={color} size={size} />
      </Animated.View>
    </View>
  );
};

export default RotatingIcon;
