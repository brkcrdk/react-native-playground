import React, {useState} from 'react';
import {View, StyleSheet, Switch as NativeSwitch} from 'react-native';
import {Container, Text, CustomSwitch} from '../../components';
import {useTheme} from '../../hooks';
const Switch = () => {
  const {currentTheme} = useTheme();

  const [preview, setPreview] = useState(true);

  const s = StyleSheet.create({
    exampleContainer: {
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
    },
  });

  return (
    <Container>
      <Text color={currentTheme.text} fontSize={20} marginBottom={20}>
        Switch Components Example
      </Text>
      <View style={s.exampleContainer}>
        <Text color={currentTheme.text} fontSize={15} marginBottom={20}>
          Custom
        </Text>
        <CustomSwitch
          onChange={() => {
            setPreview(!preview);
          }}
        />
        <Text color={preview ? 'red' : 'black'} paddingTop={20} fontSize={15}>
          On change event
        </Text>
      </View>
    </Container>
  );
};

export default Switch;
