import {useContext, useEffect, useCallback} from 'react';
import {DefaultPage} from '../context/defaultPage';
import AsnycStorage from '@react-native-async-storage/async-storage';

const useDefaultPage = () => {
  const [defaultPage, updateDefaultPage] = useContext(DefaultPage);

  return {defaultPage, updateDefaultPage};
};

export default useDefaultPage;
