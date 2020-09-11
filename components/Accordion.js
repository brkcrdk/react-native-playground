import React from 'react';
import {View, StyleSheet} from 'react-native';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  const s = StyleSheet.create({
    container: {
      width: '100%',
    },
  });
  return (
    <View style={s.container}>
      <AccordionItem />
      <AccordionItem />
      <AccordionItem />
    </View>
  );
};

export default Accordion;
