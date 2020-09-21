import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '../hooks';

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const s = StyleSheet.create({
    container: {
      borderWidth: 1,
      width: 75,
      height: 25,
    },
    switch: {},
  });
  return (
    <View style={s.container}>
      <View style={s.switch} />
    </View>
  );
};

export default CustomSwitch;
