export const TasksCards = ({ data }) => {
  return (
    <div className="col-sm-3 gy-3 gx-3">
      <div className="card bg-warning">
        <div className="card-body">
          <h5 className="card-title ">
            Tarea N° <b className="text-danger">{data.id}</b>
          </h5>
          <p className="card-text">
            <i>{data.taskTitle}</i>
          </p>
          <button type="button" className="btn btn-sm btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
