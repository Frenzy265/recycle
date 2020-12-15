import Header from "../components/Header";
import { Task } from "../components/Task";

export default function Challenge() {
  return (
    <>
      <Header>Challenge</Header>
      <Task
        done
        label="Reuse"
        task="Anstatt etwas Neues zu kaufen, nutze die Angebote auf ebay (Kleinanzeigen), Medimops oder Second Hand Läden. Damit sparst du nicht nur Geld, sondern ermöglichst gut erhaltene Dingen ein zweites Leben."
      ></Task>
      <Task
        label="Recycle"
        task="Nehme beim nächsten Spaziergang durch den Park eine Tüte und Handschuh..."
      ></Task>
      <Task
        done
        label="Reduse"
        task="Besuche einen Unverpacktladen und kaufe dort Zutaten, die du häufig be......"
      ></Task>
    </>
  );
}
