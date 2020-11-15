import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Text, CustomSwitch} from '../../components';
import Icon from 'react-native-vector-icons/Entypo';
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
          renderLabel
          on={<Icon name="emoji-happy" size={19} color="#fff" />}
          off={<Icon name="emoji-sad" size={19} color="#000" />}
          activeColor={currentTheme.success}
          inactiveColor={currentTheme.danger}
          checked
          duration={200}
        />
        <Text color={preview ? 'red' : 'black'} paddingTop={20} fontSize={15}>
          On change event
        </Text>
      </View>
    </Container>
  );
};

export default Switch;
