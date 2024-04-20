import React from "react";
import { useForm } from "react-hook-form";

export default function Modal() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-screen backdrop-blur flex items-center justify-center">
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input type="text" {...register("task")} placeholder="task" required />
        <button>save</button>
      </form>
    </div>
  );
}
