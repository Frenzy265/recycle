import { useEffect, useState } from "react";
import { getAllTasks, updateStatusTask } from "../api/challenge";
import Header from "../components/Header";
import { Task } from "../components/Task";

export default function Challenge() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      const allTasks = await getAllTasks();
      if (mounted) {
        setTasks(allTasks);
      }
    }
    fetchData();
    return () => {
      mounted = false;
    };
  }, [tasks]);

  const handleClickStatus = async (task) => {
    await updateStatusTask(task);
  };

  return (
    <>
      <Header>Challenge</Header>
      {tasks?.map((task) => (
        <Task
          key={task._id}
          done={task.done}
          label={task.label}
          task={task.task}
          onClick={() => handleClickStatus(task)}
        ></Task>
      ))}
    </>
  );
}
