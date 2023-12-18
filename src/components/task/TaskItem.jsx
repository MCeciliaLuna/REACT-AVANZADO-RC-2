import React from 'react'

export const TaskItem = ({ dataTaskItem }) => {

    const{ id, taskTitle} = dataTaskItem;

  return (
    <div key={id} className='col-sm-3 gy-3 gx-3'>
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title ">Tarea N°: { id }</h5>
                <p className="card-text">{taskTitle }</p>
                <button type='button' className="btn btn-sm btn-danger">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
  )
}
