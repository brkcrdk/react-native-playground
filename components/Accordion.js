import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import RippleButton from './RippleButton';
import {useTheme} from '../hooks';

const Accordion = () => {
  const {currentTheme} = useTheme();
  const [scrollHeight, setScrollHeight] = useState();
  const [active, setActive] = useState(false);
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
      <RippleButton
        backgroundColor="transparent"
        padding={0}
        marginVertical={10}>
        <View style={s.accordionItem}>
          <View style={s.header}>
            <Text>Test</Text>
            <Text>Icon</Text>
          </View>
          <View>
            <Text>Content</Text>
          </View>
        </View>
      </RippleButton>
    </View>
  );
};

export default Accordion;
