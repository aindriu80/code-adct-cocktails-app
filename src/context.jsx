import React, { useState, useEffect, useContext } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value='Hello from AppProvider'>
      {children}
    </AppContext.Provider>
  );
};

// make sure to use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
