import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

//name hooks so that account holder's name can be accessed by other components
export const useName = () => {
  return useContext(ThemeContext);
}; 

export const useNameUpdate = () => {
  return useContext(ThemeUpdateContext);
}; 

const ThemeProvider = ({ children }) => {
  const [userName, setUserName] = useState('Lee');

  function setName(name) {
    setUserName(name);
  }

  return (
    <ThemeContext.Provider value={userName}>
      <ThemeUpdateContext.Provider value={setName}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  ); 
};

export default ThemeProvider;
