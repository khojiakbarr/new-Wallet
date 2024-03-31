import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import { Routes, Route } from "react-router-dom";
import History from "./components/History/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CurrencyConverter />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
