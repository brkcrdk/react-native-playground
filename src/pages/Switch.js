import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  Text,
  CustomSwitch,
  NativeSwitch,
  ColorInterpolation,
  CustomTest,
} from '../../components';
import {useTheme} from '../../hooks';
const Switch = () => {
  const {currentTheme} = useTheme();

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
    interpolation: {
      marginTop: 20,
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
          <CustomSwitch />
        </View>
        <View style={s.switch}>
          <Text color={currentTheme.text} fontSize={15} marginBottom={20}>
            Native
          </Text>
          <NativeSwitch />
        </View>
      </View>
      <View style={s.interpolation}>
        <ColorInterpolation />
      </View>
      <CustomTest />
    </Container>
  );
};

export default Switch;
