import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';

// TODO: Create custom switch component with view and reanimated.

const NativeSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
    <Switch
      trackColor={{
        false: '#767577',
        true: '#81b0ff',
      }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default NativeSwitch;
