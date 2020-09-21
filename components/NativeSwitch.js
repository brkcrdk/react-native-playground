import React, {useState} from 'react';
import {Switch} from 'react-native';

const NativeSwitchg = () => {
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

export default NativeSwitchg;
