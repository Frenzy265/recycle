import { useEffect, useState } from "react";
import { getAllTasks } from "../api/challenge";
import Header from "../components/Header";
import { Task } from "../components/Task";

export default function Challenge() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    async function fetchData() {
      const allTasks = await getAllTasks();
      setTasks(allTasks);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header title="Challenge" />
      {tasks?.map((task) => (
        <Task
          key={task._id}
          done={task.done}
          label={task.label}
          task={task.task}
        ></Task>
      ))}
    </>
  );
}
