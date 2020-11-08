import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';
import AccordionItem from './AccordionItem';
import {useTheme} from '../hooks';

const Accordion = ({data}) => {
  const {currentTheme} = useTheme();

  const s = StyleSheet.create({
    container: {
      width: '100%',
    },
  });

  return (
    <View style={s.container}>
      {data.map((item, index) => (
        <AccordionItem title={item.title} key={`accordion-item-${index}`}>
          <Text color={currentTheme.text} fontSize={13} fontWeight="100">
            {item.content}
          </Text>
        </AccordionItem>
      ))}
    </View>
  );
};

export default Accordion;
