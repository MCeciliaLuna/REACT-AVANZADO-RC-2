import React, { useState } from 'react'

export const TaskAdd = ({ onSetTask, newTask, onClickAdd }) => {


    const onChangeAddTask = (event) => {
        onSetTask(event.target.value)
    }


  return (
    <>
        <div class="mb-3 col-5">
                <input 
                    type="text" 
                    className="form-control"  
                    placeholder="Agregar una tarea"
                    value={newTask}
                    onChange={(event) => onChangeAddTask(event)}
                />
        </div>
        <div class="mb-3 col-5">
            <button 
                className='btn btn-success'
                onClick={onClickAdd}
            >AGREGAR
        </button>
        </div>
    </>
  )
}
