import React from "react";

export default function Table() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-8 mx-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Task
            </th>

            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-6 py-4 text-center ">
              Silver
              <input0-
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-[5px]"
              />
            </td>
            <td className="px-6 py-4 flex items-center text-center justify-center">
              <button className="text-center py-[5px] px-3 rounded text-black font-bold bg-white">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
