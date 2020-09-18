import React from 'react';
import {Container, Text, CustomSwitch} from '../../components';
import {useTheme} from '../../hooks';

const Switch = () => {
  const {currentTheme} = useTheme();
  return (
    <Container>
      <Text color={currentTheme.text} fontSize={20} marginBottom={20}>
        Switch Component Example
      </Text>
      <CustomSwitch />
    </Container>
  );
};

export default Switch;
