import React, { useContext } from "react";
import { HistoryCon } from "../../context/HistoryContex";

const History = () => {
  const { history, setHistory } = useContext(HistoryCon);
  return (
    <table className="w-full mt-7 table">
      <thead className="w-full">
        <tr>
          <th>Kurs</th>
          <th>From:</th>
          <th>To:</th>
        </tr>
      </thead>
      <tbody>
        {history.map((his) => {
          return (
            <tr>
              <td className="text-center py-2">{his.kurs}</td>
              <td className="text-center py-2">{his.from}</td>
              <td className="text-center py-2">{his.to}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default History;
