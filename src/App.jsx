import "./App.css";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="bg-gray-600 h-screen">
      <h1 className="text-center font-bold text-[25px] pt-4">Todo App</h1>
      <Todo />
    </div>
  );
}

export default App;
