import { InputField } from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import IconBox from "../assets/icon-box-primary.svg";
import { postBoxById } from "../utils/api-boxes";
import { useHistory } from "react-router-dom";

export default function AddNewBox() {
  const [title, setTitle] = useState("");
  const [item, setItem] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postBoxById({
      title: title,
      items: [item],
    });
    history.push("/box");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Button type="submit" value="AddNewBox">
        <p>Erstelle eine neue Kiste</p>
        <img src={IconBox} alt="Icon Box" />
      </Button>
    </form>
  );
}
