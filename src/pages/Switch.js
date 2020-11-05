import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Text, CustomSwitch, NativeSwitch} from '../../components';
import {useTheme} from '../../hooks';
const Switch = () => {
  const {currentTheme} = useTheme();

  const [preview, setPreview] = useState(true);

  const s = StyleSheet.create({
    exampleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
    },
    switch: {
      alignItems: 'center',
    },
  });

  return (
    <Container>
      <Text color={currentTheme.text} fontSize={20} marginBottom={20}>
        Switch Components Example
      </Text>
      <View style={s.exampleContainer}>
        <View style={s.switch}>
          <Text color={currentTheme.text} fontSize={15} marginBottom={20}>
            Custom
          </Text>
          <CustomSwitch
            onChange={() => {
              setPreview(!preview);
            }}
          />
          <Text color={preview ? 'red' : 'black'}>On change event</Text>
        </View>
        <View style={s.switch}>
          <Text color={currentTheme.text} fontSize={15} marginBottom={20}>
            Native
          </Text>
          <NativeSwitch />
        </View>
      </View>
    </Container>
  );
};

export default Switch;
