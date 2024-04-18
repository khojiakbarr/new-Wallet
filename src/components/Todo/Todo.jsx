import React, { useReducer } from "react";
import { useForm } from "react-hook-form";

export default function Todo() {
  const [todo, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, task: action.task };
      default:
        return state;
    }
  }, {});
  console.log(todo);

  const { register, handleSubmit, reset } = useForm();

  const handle = (data) => {
    dispatch({ type: "add", ...data });
    reset();
  };
  return (
    <div className="w-full flex items-center justify-center pt-5 ">
      <form className="w-[300px]" onSubmit={handleSubmit(handle)}>
        <input
          className="border px-4 py-1 mr-4 rounded outline-none transition-all duration-300 hover:scale-110"
          autoComplete="off"
          type="text"
          placeholder="task"
          {...register("task")}
          required
        />
        <button className="px-4 py-1 bg-white rounded transition-all duration-300 active:scale-90 hover:scale-110">
          Add
        </button>
      </form>
    </div>
  );
}
