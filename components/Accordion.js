import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
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
    shadowContainer: {
      width: '100%',
      marginVertical: 20,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 20,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
  });

  return (
    <View style={s.container}>
      <Text color={currentTheme.text}>Accordion component is here</Text>
      <View
        style={s.shadowContainer}
        onLayout={(e) => {
          console.log(e.nativeEvent.layout.height);
        }}>
        <Text color="black">Accordion Header</Text>
        <View>
          <Text>Container</Text>
        </View>
      </View>
    </View>
  );
};

export default Accordion;
