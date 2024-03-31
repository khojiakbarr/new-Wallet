import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CurrencyContext from "./context/CurrencyContext";
import HistoryContex from "./context/HistoryContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <HistoryContex>
      <CurrencyContext>
        <App />
      </CurrencyContext>
    </HistoryContex>
  </BrowserRouter>
);
