import { AddTask } from "./AddTask";
import { TasksCards } from "./TasksCards";
import { dataTask } from "../../data/TasksExamples";
import { useState } from "react";

export const Task = () => {

  const [dataTaskArray, setDataTaskArray] = useState(dataTask)

  
  
  const onClickValue = (valueTask) => {
    const newTaskObject = {
      id : dataTaskArray.at(-1).id + 1,
      taskTitle : valueTask
    }

    setDataTaskArray([
      ...dataTaskArray,
      newTaskObject
    ])
  };

  const deleteTask = (id) => {
    setDataTaskArray(dataTaskArray.filter(item => item.id !== id))
  }

  return (
    <div className="container py-5 text-dark" id="featured-3">
      <h2 className="pb-2 border-bottom">MIS TAREAS</h2>
      <div className="row py-5">
        {dataTaskArray.map((item) => (
          <TasksCards key={item.id} data={item} deleteTask={deleteTask} />
        ))}
      </div>
      <AddTask onClickValue={(valueTask)=>onClickValue(valueTask)} />
    </div>
  );
};
