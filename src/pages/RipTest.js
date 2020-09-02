import React from 'react';
import {View} from 'react-native';
import {Container, Text, CustomRipple} from '../../components';

const RipTest = () => {
  return (
    <Container>
      <Text color="#fff" fontSize={20} marginBottom={20}>
        RipTest is here
      </Text>
      <CustomRipple />
    </Container>
  );
};

export default RipTest;
