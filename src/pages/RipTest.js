import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Text, CustomRipple} from '../../components';
import {useTheme} from '../../hooks';

const RipTest = () => {
  const {currentTheme} = useTheme();
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const s = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
  });

  return (
    <Container>
      <Text color={currentTheme.text} fontSize={20} marginBottom={20}>
        Count: {count}
      </Text>
      <View style={s.container}>
        <CustomRipple
          backgroundColor={currentTheme.success}
          onPress={handleIncrement}>
          <View>
            <Text color="#fff">Increment</Text>
          </View>
        </CustomRipple>
        <CustomRipple
          onPress={handleDecrement}
          backgroundColor={currentTheme.danger}>
          <View>
            <Text color="#fff">Decrement</Text>
          </View>
        </CustomRipple>
        <CustomRipple
          backgroundColor={currentTheme.warning}
          onPress={handleReset}>
          <View>
            <Text color="#fff">Reset</Text>
          </View>
        </CustomRipple>
      </View>
    </Container>
  );
};

export default RipTest;
