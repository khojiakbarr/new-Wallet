import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";

const todoContex = createContext();

function App() {
  const [todo, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "get":
        return [...state, ...action.local];
      case "add":
        localStorage.setItem("tasks", JSON.stringify([...state, action.task]));
        return [...state, action.task];
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
      <div className="bg-gray-600 h-screen">
        <h1 className="text-center font-bold text-[25px] pt-4">Todo App</h1>
        <Todo />
      </div>
    </todoContex.Provider>
  );
}
export default App;
export { todoContex };
