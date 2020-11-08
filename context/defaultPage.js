import React, {useState, createContext} from 'react';

export const DefaultPage = createContext();

export const DefaultPageContext = ({children}) => {
  const [defaultPage, setDefaultPage] = useState('Home');

  return (
    <DefaultPage.Provider value={[defaultPage, setDefaultPage]}>
      {children}
    </DefaultPage.Provider>
  );
};
