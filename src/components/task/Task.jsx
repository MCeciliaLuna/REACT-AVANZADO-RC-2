import React, { useState } from 'react'
import { TaskItem } from './TaskItem'
import { TaskAdd } from './TaskAdd'

export const Task = ({ taskData }) => {

    const [newTask, setNewTask] = useState('');
    const [addDataCard, setAddDataCard] = useState(taskData)

    const onClickAdd = () => {

        const newTaskObj = {
            id: addDataCard[addDataCard.length - 1].id + 1,
            taskTitle:newTask
        }

        setAddDataCard([
            ...addDataCard,
            newTaskObj
        ]);
    }


  return (
    <div className="container py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">MIS TAREAS</h2>
        <div className="row py-5">
            { addDataCard.map( (data) => (
            <TaskItem dataTaskItem={data}/>
            ))}
        </div>
        <TaskAdd 
            onSetTask = { setNewTask }
            newTask={newTask}
            onClickAdd={onClickAdd}
        />
    </div>
  )
}
