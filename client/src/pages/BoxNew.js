import { Inputfield } from "../components/Input";
import Button from "../components/Button";
import IconAdd from "../assets/icon-add-primary.svg";
import IconPen from "../assets/icon-pen-primary.svg";
import IconRecycle from "../assets/icon-recycle-primary.svg";

export default function BoxNew() {
  return (
    <>
      <Inputfield
        title="Geben Sie der Box einen Namen"
        icon={IconPen}
        alt="Icon Add"
      />
      <Inputfield title="Neuer Eintrag" icon={IconAdd} alt="Icon Add" />
      <Button>
        <p>Erfolgreich recycled</p>
        <img src={IconRecycle} alt="Icon recycle" />
      </Button>
    </>
  );
}
