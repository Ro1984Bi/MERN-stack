import { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskPage() {
  const { tasks, loadData } = useTask();

  useEffect(() => {
    loadData();
  }, []);

  const renderList = () => {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;

    return tasks.map((task) => <TaskItem task={task} key={task.id} />);
  };

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center ">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">
      {renderList()}
      </div>
    </div>
  );
}

export default TaskPage;
