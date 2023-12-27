import { useState } from "react";

export const AddTask = ({ onClickValue }) => {
  const [valueTask, setValueTask] = useState("");

  const onChangeValueTask = () => {
    setValueTask(event.target.value)
  }

  return (
    <>
      <div className="mb-3 col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar una tarea"
          // value={}
          onChange={onChangeValueTask}
        />
      </div>
      <div className="mb-3 col-5">
        <button
          onClick={() => onClickValue(valueTask)}
          className="btn btn-success"
        >
          AGREGAR
        </button>
      </div>
      </>
  );
};
