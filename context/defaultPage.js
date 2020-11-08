import React, {useState, createContext} from 'react';

const DefaultPage = createContext();

const DefaultPageContext = ({children}) => {
  const [defaultPage, setDefaultPage] = useState('');

  return (
    <DefaultPage.Provider value={[defaultPage, setDefaultPage]}>
      {children}
    </DefaultPage.Provider>
  );
};

export {DefaultPage, DefaultPageContext};
