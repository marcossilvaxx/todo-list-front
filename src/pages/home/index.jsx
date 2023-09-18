import React, { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import * as api from "../../axios/api";

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [selectedtask, setSelectedTask] = useState(null);
  const [forceRender, setForceRender] = useState(false);

  const reloadPage = () => {
    setForceRender(!forceRender);
  };

  const createTask = async (data) => {
    await api.createTask(data);
    reloadPage();
  };

  const deleteTask = async (data) => {
    await api.deleteTask(data.id);
    reloadPage();
  };

  const selectEditingTask = (data) => {
    setSelectedTask(data);
  };

  const editTask = async (data) => {
    await api.updateTask(data.id, data);
    setSelectedTask(null);
    reloadPage();
  };

  const checkTask = async (id, value) => {
    await api.toggleTaskChecked(id, value);
    reloadPage();
  };

  useEffect(() => {
    (async () => {
      const data = await api.getTasks();

      setTodoList(data);
    })();
  }, [forceRender]);

  return (
    <div className="min-h-screen bg-gray-500">
      <nav className="flex justify-center p-4 bg-gray-600">
        <h1 className="text-white text-2xl font-bold">Todo List</h1>
      </nav>
      <div>
        <TaskForm task={selectedtask} onSave={createTask} onEdit={editTask} />
        <div className="flex flex-wrap justify-center gap-5">
          {todoList?.map((task) => (
            <Task
              key={task.id}
              data={task}
              onDelete={deleteTask}
              onEdit={selectEditingTask}
              onCheck={checkTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
