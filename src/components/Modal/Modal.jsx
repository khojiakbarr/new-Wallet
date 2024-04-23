import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { todoContex, todoModalContex } from "../../App";
// import useForm from '@alfonsobries/react-use-form';

export default function Modal() {
  const { todo, dispatch } = useContext(todoContex);
  const { showModal, setShowModal } = useContext(todoModalContex);
  const { register, handleSubmit, reset } = useForm();
  const form = useForm(showModal);
  const { state, setState } = useState({
    form: {
      task: showModal.task,
    },
  });

  const onSubmit = (data) => {
    setShowModal({ modal: false, task: "", id: "" });
    console.log(data);
    reset();
    dispatch({ type: "edit", upTask: data.task, id: showModal.id });
  };
  const onChangee = (e) => {
    
  };

  return (
    <div
      onClick={(e) => {
        setShowModal({ modal: false, task: "", id: "" });
      }}
      className="fixed top-0 left-0 w-full h-screen backdrop-blur flex items-center justify-center"
    >
      <form
        className="p-[20px] bg-white rounded "
        onSubmit={handleSubmit((data) => onSubmit(data))}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          className="px-4 py-1 border-2 border-sky-600 mr-4 rounded outline-none "
          type="text"
          {...register("task")}
          placeholder="task"
          autoComplete="off"
          required
          value={state.form.task}
          onChange={(e)=>e.target.value}
        />
        <button className=" rounded px-4 py-1 border-2 border-sky-600">
          save
        </button>
      </form>
    </div>
  );
}
