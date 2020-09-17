import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  const s = StyleSheet.create({
    container: {
      width: '100%',
      height: 200,
    },
  });
  const DATA = [
    {
      title: 'First Item',
    },
    {
      title: 'Second Item',
    },
    {
      title: 'Third Item',
    },
  ];

  return (
    <View>
      <FlatList
        style={s.container}
        data={DATA}
        renderItem={({item}) => {
          return <AccordionItem title={item.title} />;
        }}
        keyExtractor={(item, index) => `${item.title}-${index}`}
      />
    </View>
  );
};

export default Accordion;
