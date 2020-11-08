import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './src/Navigation';
import {useTheme} from './hooks';
import {DefaultPageContext} from './context/defaultPage';

const App = () => {
  const {currentTheme, appearance} = useTheme();

  return (
    <DefaultPageContext>
      <NavigationContainer>
        <StatusBar
          barStyle={`${appearance === 'dark' ? 'light' : 'dark'}-content`}
          backgroundColor={currentTheme.background}
        />
        <Navigation />
      </NavigationContainer>
    </DefaultPageContext>
  );
};

export default App;
