import React from 'react';
import {View} from 'react-native';
import {Container, Text} from '../../components';
const Home = () => {
  return (
    <Container>
      <View alignItems="center" justifyContent="center">
        <Text alignItems="center">React Native Playground</Text>
        <Text alignItems="center">
          Add new components or test existing ones here
        </Text>
      </View>
    </Container>
  );
};

export default Home;
