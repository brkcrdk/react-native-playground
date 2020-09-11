import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Text from './Text';
import {useTheme} from '../hooks';

const Accordion = () => {
  const {currentTheme} = useTheme();
  const [active, setActive] = useState(false);
  const height = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const s = StyleSheet.create({
    container: {
      width: '100%',
      padding: 10,
    },
    accordionItem: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 5,
      width: '100%',
      marginVertical: 5,
      overflow: 'hidden',
    },
    content: {},
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  return (
    <View style={s.container}>
      <Text color={currentTheme.text}>Accordion component is here</Text>
      <View style={s.accordionItem}>
        <TouchableWithoutFeedback
          onPress={(e) => {
            setActive(!active);
            if (active) {
              return (height.value = withTiming(100, {duration: 300}));
            }
            return (height.value = withTiming(0, {duration: 300}));
          }}>
          <View>
            <Text color="black">Accordion Header</Text>
          </View>
        </TouchableWithoutFeedback>
        <Animated.View style={[s.content, animatedStyle]}>
          <Text>Container</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default Accordion;
