import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './src/Navigation';
import {useTheme} from './hooks';

const App = () => {
  const {currentTheme, appearance} = useTheme();
  const [defaultPage, setDefaultPage] = useState('Home');

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={`${appearance === 'dark' ? 'light' : 'dark'}-content`}
        backgroundColor={currentTheme.background}
      />
      <Navigation defaultPage={defaultPage} />
    </NavigationContainer>
  );
};

export default App;
