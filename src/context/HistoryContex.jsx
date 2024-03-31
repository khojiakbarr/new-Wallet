import React, { createContext, useState } from "react";

const HistoryCon = createContext();

const HistoryContex = ({ children }) => {
  const [history, setHistory] = useState([]);


  return (
    <HistoryCon.Provider value={{ history, setHistory }}>
      {children}
    </HistoryCon.Provider>
  );
};

export default HistoryContex;

export { HistoryCon };
