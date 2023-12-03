'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [selectedBarLocation, setSelectedBarLocation] = useState({});

  const setLocation = (newGeography) => {
    setSelectedBarLocation({ newGeography });
  };

  return (
    <AppContext.Provider value={{ selectedBarLocation, setLocation }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
