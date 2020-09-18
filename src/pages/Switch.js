import React from 'react';
import {View} from 'react-native';
import {Container, Text} from '../../components';
import {useTheme} from '../../hooks';

const Switch = () => {
  const {currentTheme} = useTheme();
  return (
    <Container>
      <Text color={currentTheme.text} fontSize={20} marginBottom={20}>
        Switch Component Example
      </Text>
    </Container>
  );
};

export default Switch;
