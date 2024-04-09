import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [showScene, setShowScene] = useState(false);

  const toggleScene = () => {
    setShowScene((prevShowScene) => !prevShowScene);
  };

  return (
    <AppContext.Provider value={{ showScene, toggleScene }}>
      {children}
    </AppContext.Provider>
  );
};
