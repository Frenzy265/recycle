import { List } from "../components/ListItem";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import { FormInput } from "../components/Form";
import IconAdd from "../assets/icon-add-primary.svg";
import Button from "../components/Button";

export default function BoxExist() {
  return (
    <>
      <FormInput title="Neuer Eintrag" icon={IconAdd} alt="Icon add" />
      <List item="Wandfarbe" icon={IconRecycle} alt={"Icon Recycle"} />
      <Button>
        <p>Kiste erfolgreich recycled</p>
        <img src={IconRecycle} alt="Icon recycle" />
      </Button>
    </>
  );
}
