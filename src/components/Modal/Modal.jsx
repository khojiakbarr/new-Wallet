import React, { useContext, useEffect, useState } from "react";
import { todoContex, todoModalContex } from "../../App";

export default function Modal() {
  const { todo, dispatch } = useContext(todoContex);
  const { showModal, setShowModal } = useContext(todoModalContex);
  const [newTask, setNewTask] = useState(showModal.task);

  function handleInputValue(e) {
    const value = e.target.value;
    setNewTask(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = todo.map((task) =>
      task.id === showModal.id ? { ...task, task: newTask } : task
    );
    dispatch({ type: "update", newArr: newTodo });
    setShowModal({ modal: false, task: "", id: "" });
  }

  return (
    <div
      onClick={(e) => {
        setShowModal({ modal: false, task: "", id: "" });
      }}
      className="fixed top-0 left-0 w-full h-screen backdrop-blur flex items-center justify-center"
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-[20px] bg-white rounded "
      >
        <input
          className="px-4 py-1 border-2 border-sky-600 mr-4 rounded outline-none "
          type="text"
          placeholder="task"
          autoComplete="off"
          required
          value={newTask}
          onChange={(e) => handleInputValue(e)}
        />
        <button className=" rounded px-4 py-1 border-2 border-sky-600">
          save
        </button>
      </form>
    </div>
  );
}
