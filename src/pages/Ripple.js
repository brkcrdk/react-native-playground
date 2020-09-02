import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Text, RippleButton} from '../../components';
import {useTheme} from '../../hooks';

const Ripple = () => {
  const [count, setCount] = useState(0);
  const {currentTheme} = useTheme();
  const s = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
  });

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <Container>
      <Text fontSize={20} marginBottom={20}>
        Count is {count}
      </Text>
      <View style={s.container}>
        <RippleButton
          backgroundColor={currentTheme.success}
          onPress={handleIncrement}>
          <Text>Increment</Text>
        </RippleButton>
        <RippleButton
          backgroundColor={currentTheme.danger}
          onPress={handleDecrement}>
          <Text>Decrement</Text>
        </RippleButton>
        <RippleButton
          backgroundColor={currentTheme.warning}
          onPress={handleReset}>
          <Text>Reset</Text>
        </RippleButton>
      </View>
    </Container>
  );
};

export default Ripple;
