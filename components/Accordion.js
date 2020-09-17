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
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Accordion;
