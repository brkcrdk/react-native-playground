import React, {useRef, useEffect} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RotatingIcon = ({
  name = 'chevron-down',
  color = 'red',
  size = 16,
  isActive = false,
}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const s = StyleSheet.create({
    icon: {
      color: 'red',
    },
  });
  // useEffect(() => {
  //   if(isActive)
  // }, []);
  // const animatedStyles = {
  //   icon: {
  //     transform: [
  //       {
  //         rotate: rotateAnim.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: ['0deg', '90deg'],
  //         }),
  //       },
  //     ],
  //   },
  // };
  return (
    <View>
      <Text>{JSON.stringify(isActive)}</Text>
      <Icon name={name} color={color} size={size} style={s.icon} />
    </View>
  );
};

export default RotatingIcon;
