import React from 'react';
import {Text as Content, StyleSheet} from 'react-native';

import {useTheme} from '../hooks';

const Text = ({children, ...props}) => {
  const {currentTheme} = useTheme();
  const s = StyleSheet.create({
    text: {
      color: currentTheme.text,
      ...props,
    },
  });
  return <Content style={s.text}>{children}</Content>;
};

export default Text;
