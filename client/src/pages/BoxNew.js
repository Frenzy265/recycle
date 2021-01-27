import { InputField } from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import IconBox from "../assets/icon-box-primary.svg";
import { useHistory } from "react-router-dom";
import { HeaderBackButton } from "../components/HeaderBackButton";
import { addBox } from "../indexedDB/boxes";

export default function AddNewBox() {
  const [title, setTitle] = useState("");
  const [item, setItem] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    addBox(title, item);
    history.push("/box");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HeaderBackButton headline={"Eine neue Box"}></HeaderBackButton>
      <InputField
        title="Geben Sie der Box einen Namen"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <InputField
        title="Neuer Eintrag"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <Button regular type="submit" value="AddNewBox">
        <p>Erstelle eine neue Box</p>
        <img src={IconBox} alt="Icon Box" />
      </Button>
    </form>
  );
}
