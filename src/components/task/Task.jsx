import { AddTask } from "./AddTask";
import { TasksCards } from "./TasksCards";
import { dataTask } from "../../data/TasksExamples";

export const Task = () => {
  return (
    <div className="container py-5 text-dark" id="featured-3">
      <h2 className="pb-2 border-bottom">MIS TAREAS</h2>
      <div className="row py-5">
        {dataTask.map((item) => (
          <TasksCards key={item.id} data={item} />
        ))}
      </div>
      <AddTask />
    </div>
  );
};
