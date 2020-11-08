import {useContext, useEffect, useCallback} from 'react';
import {DefaultPage} from '../context/defaultPage';
import AsnycStorage from '@react-native-async-storage/async-storage';

const useDefaultPage = () => {
  const [defaultPage, setDefaultPage] = useContext(DefaultPage);

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
  }, [getData, defaultPage]);

  const updateDefaultPage = async (pageName) => {
    try {
      await AsnycStorage.setItem('defaultPage', pageName);
      setDefaultPage(pageName);
    } catch {}
  };

  return {defaultPage, setDefaultPage, updateDefaultPage};
};

export default useDefaultPage;
