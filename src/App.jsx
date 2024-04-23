import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import { v4 as id } from "uuid";
import Modal from "./components/Modal/Modal";

const todoContex = createContext();
const todoModalContex = createContext();
function App() {
  const [showModal, setShowModal] = useState({
    modal: false,
    task: "",
    id: "",
  });

  const [todo, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "get":
        return [...state, ...action.local];

      case "add":
        localStorage.setItem(
          "tasks",
          JSON.stringify([
            ...state,
            { ...action.task, compledet: false, id: id() },
          ])
        );
        return [...state, { ...action.task, compledet: false, id: id() }];

      case "isCom":
        const newState = state.map((todo) =>
          todo.id === action.id ? { ...todo, compledet: !todo.compledet } : todo
        );
        console.log(newState);
        return newState;

      case "delete":
        const newUpState = state.filter((todo) => todo.id !== action.id);
        localStorage.setItem("tasks", JSON.stringify(newUpState));
        return newUpState;
      
        case "update":
          return action.newArr
      default:
        return state;
    }
  }, []);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks) {
      dispatch({ type: "get", local: tasks });
    }
  }, []);

  return (
    <todoContex.Provider value={{ todo, dispatch }}>
      <todoModalContex.Provider value={{ showModal, setShowModal }}>
        <div className="bg-gray-600 h-screen">
          <h1 className="text-center font-bold text-[25px] pt-4">Todo App</h1>
          <Todo />
          {showModal.modal ? <Modal setShowModal={setShowModal} /> : null}
        </div>
      </todoModalContex.Provider>
    </todoContex.Provider>
  );
}
export default App;
export { todoContex };
export { todoModalContex };
