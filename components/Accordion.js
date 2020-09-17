import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
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
    <FlatList
      style={s.container}
      data={data}
      renderItem={({item}) => {
        return (
          <AccordionItem title={item.title}>
            <Text color={currentTheme.text} fontSize={13} fontWeight="100">
              {item.content}
            </Text>
          </AccordionItem>
        );
      }}
      keyExtractor={(item, index) => `${item.title}-${index}`}
    />
  );
};

export default Accordion;
