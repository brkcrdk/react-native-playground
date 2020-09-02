import React, {useState} from 'react';
import {View} from 'react-native';
import {Container, Text, Button as Btn} from '../../components';

const Button = () => {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState('');

  const onPress = () => {
    setCount(count + 1);
    setAction('onPress');
  };

  const onLongPress = () => {
    setCount(count - 1);
    setAction('longPress');
  };

  const onPressOut = () => {
    setAction('pressOut');
  };
  const onPressIn = () => {
    setAction('pressIn');
  };

  return (
    <Container>
      <View justifyContent="center" alignItems="center">
        <Text marginBottom={20} fontSize={20}>
          Completed is here
        </Text>
        <Btn {...{onPress, onLongPress, onPressIn, onPressOut}}>
          <Text color="#fff">Test Button</Text>
        </Btn>
        <Text marginTop={20} fontSize={20}>
          COUNT: {count}
        </Text>
        <Text marginTop={20} fontSize={20}>
          Action: {action}
        </Text>
      </View>
    </Container>
  );
};

export default Button;
