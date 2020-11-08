import {useState} from 'react';

const useDefaultPage = () => {
  const [defaultPage, setDefaultPage] = useState('Home');

  const changeDefaultPage = (pageName) => setDefaultPage(pageName);

  return {defaultPage, changeDefaultPage};
};

export default useDefaultPage;
