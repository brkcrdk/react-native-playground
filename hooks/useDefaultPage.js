import {useContext} from 'react';
import {DefaultPage} from '../context/defaultPage';
const useDefaultPage = () => {
  const [defaultPage, setDefaultPage] = useContext(DefaultPage);
  return {defaultPage, setDefaultPage};
};

export default useDefaultPage;
