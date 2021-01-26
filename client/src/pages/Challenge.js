import { useQuery } from "react-query";
import { getAllTasks } from "../api/challenge";
import { CardChallenge } from "../components/Card";
import Header from "../components/Header";

export default function Challenge() {
  const { data: tasks, status } = useQuery("tasks", getAllTasks);

  return (
    <>
      <Header>Challenge</Header>

      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Es ist ein Fehler aufgetreten</div>}
      {status === "success" &&
        tasks?.map((task) => (
          <CardChallenge
            key={task._id}
            done={task.done}
            title={task.title}
            description={task.description}
          ></CardChallenge>
        ))}
    </>
  );
}
