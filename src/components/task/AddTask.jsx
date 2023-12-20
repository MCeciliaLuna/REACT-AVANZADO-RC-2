import { useState } from "react";

export const AddTask = () => {
  const [valueTask, setValueTask] = useState("");
  const onChangeValue = (event) => {
    setValueTask(event.target.value);
  };

  return (
    <>
      <div className="mb-3 col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Agregar una tarea"
          // value={}
          onChange={onChangeValue}
        />
      </div>
      <div className="mb-3 col-5">
        <button className="btn btn-success">AGREGAR</button>
      </div>
      <p>{valueTask}</p>
    </>
  );
};
