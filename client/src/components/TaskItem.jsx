
import { useNavigate } from "react-router-dom";
import { useTask } from "../context/TaskContext";

function TaskItem({ task }) {

  const {deleteTask, toggleTaskDone} = useTask()
  const navigate = useNavigate()

  const handleDone = async () => {
    await toggleTaskDone(task.id)
  }

  return (
    <div className="bg-slate-300 rounded-md p-4">
    <header className="flex justify-between">
    <h2 className="text-sm font-bold">{task.title}</h2>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
    </header>
      <p className="text-xs">{task.description}</p>
   
      <span>{task.created_at}</span>
      <div className="flex gap-x-1 ">
      <button className="bg-red-500 rounded-sm px-2 py-1 text-white" onClick={() => deleteTask(task.id)}>Delete</button>
      <button className="bg-blue-500 rounded-sm px-2 py-1 text-white" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      <button  className="bg-green-500 rounded-sm px-2 py-1 text-white" onClick={() => handleDone(task.done)}>
        Toggle Task
      </button>
      </div>
    </div>
  );
}

export default TaskItem;
