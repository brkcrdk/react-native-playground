import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import Text from './Text';
import {useTheme} from '../hooks';

const Accordion = ({children, title = 'Title'}) => {
  const {currentTheme} = useTheme();
  const [active, setActive] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const height = useSharedValue(0);
  const contentRef = useRef();

  const handlePress = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  useEffect(() => {
    if (active) {
      // Scrollheight + 20 => To add 20px padding to content bottom
      return (height.value = withTiming(scrollHeight + 20, {duration: 300}));
    }
    return (height.value = withTiming(0, {duration: 300}));
  }, [active, height, scrollHeight]);

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
    content: {
      paddingHorizontal: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
  });

  return (
    <View style={s.container}>
      <View style={s.accordionItem}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={s.header}>
            <Text color={currentTheme.text} fontWeight="700" fontSize={16}>
              {title}
            </Text>
            <Icon
              name={active ? 'down' : 'up'}
              color={currentTheme.primary}
              size={17}
            />
          </View>
        </TouchableWithoutFeedback>
        <Animated.ScrollView
          onContentSizeChange={(_, contentHeight) =>
            setScrollHeight(contentHeight)
          }
          style={[s.content, animatedStyle]}
          ref={contentRef}>
          {children}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default Accordion;
