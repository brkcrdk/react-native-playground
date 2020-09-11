import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Text from './Text';
// import {useTheme} from '../hooks';

const Accordion = () => {
  // const {currentTheme} = useTheme();
  const [active, setActive] = useState(false);
  const height = useSharedValue(0);

  const handlePress = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  useEffect(() => {
    if (active) {
      return (height.value = withTiming(100, {duration: 300}));
    }
    return (height.value = withTiming(0, {duration: 300}));
  }, [active, height]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const s = StyleSheet.create({
    container: {
      width: '100%',
      padding: 5,
    },
    accordionItem: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 5,
      width: '100%',
      overflow: 'hidden',
    },
    content: {},
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 10,
    },
  });

  return (
    <View style={s.container}>
      <View style={s.accordionItem}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={s.header}>
            <Text color="black">Accordion Header</Text>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View style={[s.content, animatedStyle]}>
          <Text>Accordion Content</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Accordion;
