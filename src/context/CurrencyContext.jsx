import React, { createContext, useState } from "react";
import { currencies } from "../statics/currency";

const Currency = createContext();

const CurrencyContext = ({ children }) => {
  const [currency] = useState([...currencies]);

  return <Currency.Provider value={currency}>{children}</Currency.Provider>;
};

export default CurrencyContext;

export { Currency };
