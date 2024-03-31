import React, { useContext, useState } from "react";
import { Currency } from "../../context/CurrencyContext";
import { HistoryCon } from "../../context/HistoryContex";
import { Link } from "react-router-dom";

const CurrencyConverter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [inputVals, setInputVals] = useState({
    forein: "",
    local: "",
  });
  const currencies = useContext(Currency);
  const { history, setHistory } = useContext(HistoryCon);

  // Function to handle the conversion of currency
  const converter = (event) => {
    const { cb_price } = currencies.find(
      (curr) => curr.code === selectedCurrency
    );
    switch (event.target.name) {
      case "forein":
        const localValue = event.target.value * cb_price;
        setInputVals({
          forein: event.target.value,
          local: Math.round(localValue),
        });
        break;
      case "local":
        const foreinValue = event.target.value / cb_price;
        setInputVals({
          forein: Math.round(foreinValue),
          local: event.target.value,
        });
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <h1 className="text-[50px] text-center py-2">ATM</h1>

      <div className="container mx-auto flex flex-col justify-start items-center h-screen">
        <select
          value={selectedCurrency}
          onChange={(e) => {
            setSelectedCurrency(e.target.value);
          }}
        >
          {currencies.map((crrcy) => {
            return (
              <option key={crrcy.code} value={crrcy.code}>
                {crrcy.title}
              </option>
            );
          })}
        </select>

        <div className="flex items-center justify-center gap-5">
          <input
            onChange={converter}
            value={inputVals.forein}
            className="border border-black p-2 my-3"
            type="number"
            placeholder={selectedCurrency}
            name="forein"
          />
          <input
            onChange={converter}
            value={inputVals.local}
            className="border border-black p-2 my-3"
            type="number"
            placeholder="UZS"
            name="local"
          />
        </div>
        <button
          className="rounded-md border-2 bg-gray-500 text-white py-2 px-4 hover:bg-gray-700"
          onClick={() =>
            setHistory([
              {
                ...history,
                kurs: selectedCurrency,
                from: inputVals.forein,
                to: inputVals.local,
              },
            ])
          }
        >
          Add to history
        </button>
        <Link to="/history" className="py-2 px-4 bg-gray-400 rounded-lg mt-2">
          History
        </Link>
      </div>
    </div>
  );
};

export default CurrencyConverter;
