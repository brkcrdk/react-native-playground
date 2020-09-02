import {useState, useCallback, useEffect} from 'react';
import {Appearance} from 'react-native';
import theme from '../theme';

const useTheme = () => {
  const [appearance, setAppearance] = useState(Appearance.getColorScheme());
  const handleTheme = useCallback(({colorScheme}) => {
    setAppearance(colorScheme);
  }, []);

  useEffect(() => {
    Appearance.addChangeListener(handleTheme);
    return () => Appearance.removeChangeListener(handleTheme);
  }, [handleTheme]);

  const currentTheme = theme[appearance];

  return {currentTheme, appearance};
};

export default useTheme;
