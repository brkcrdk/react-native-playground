import React, {useState, useEffect, useCallback, createContext} from 'react';
import AsnycStorage from '@react-native-async-storage/async-storage';

export const DefaultPage = createContext();

export const DefaultPageContext = ({children}) => {
  const [defaultPage, setDefaultPage] = useState('');

  const getData = useCallback(async () => {
    try {
      const value = await AsnycStorage.getItem('defaultPage');
      if (value) {
        setDefaultPage(value);
      }
    } catch {}
  }, [setDefaultPage]);

  useEffect(() => {
    getData();
  }, [getData]);

  const updateDefaultPage = async (pageName) => {
    try {
      await AsnycStorage.setItem('defaultPage', pageName);
      setDefaultPage(pageName);
    } catch {}
  };

  return (
    <DefaultPage.Provider value={[defaultPage, updateDefaultPage]}>
      {children}
    </DefaultPage.Provider>
  );
};
