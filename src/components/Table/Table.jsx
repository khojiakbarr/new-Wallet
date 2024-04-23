import React, { useContext } from "react";
import { todoContex, todoModalContex } from "../../App";

export default function Table() {
  const { todo, dispatch } = useContext(todoContex);
  const { showModal, setShowModal } = useContext(todoModalContex);

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
          {todo.map((todoTask) => (
            <tr
              key={todoTask.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td
                onDoubleClick={() =>
                  dispatch({
                    type: "isCom",
                    id: todoTask.id,
                  })
                }
                className={`px-6 py-4 text-center select-none ${
                  todoTask.compledet ? "line-through" : null
                } `}
              >
                {todoTask.task}
              </td>
              <td className="px-6 py-4 flex items-center text-center justify-center ">
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setShowModal({
                        modal: !showModal.modal,
                        task: todoTask.task,
                        id: todoTask.id,
                      })
                    }
                    className="text-center py-[5px] px-3 rounded text-black font-bold bg-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", id: todoTask.id })
                    }
                    className="text-center py-[5px] px-3 rounded text-black font-bold bg-white"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
