import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './src/Navigation';
import {useTheme} from './hooks';

const App = () => {
  const {currentTheme, appearance} = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={`${appearance === 'dark' ? 'light' : 'dark'}-content`}
        backgroundColor={currentTheme.background}
      />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
