import {useContext, useEffect} from 'react';
import {DefaultPage} from '../context/defaultPage';
import AsnycStorage from '@react-native-async-storage/async-storage';

const useDefaultPage = () => {
  const [defaultPage, setDefaultPage] = useContext(DefaultPage);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsnycStorage.getItem('defaultPage');
        if (value) {
          console.log(value);
        }
      } catch {}
    };
  }, []);

  const updateDefaultPage = async (pageName) => {
    try {
      await AsnycStorage.setItem('defaultPage', pageName);
      setDefaultPage(pageName);
    } catch {}
  };

  return {defaultPage, setDefaultPage, updateDefaultPage};
};

export default useDefaultPage;
