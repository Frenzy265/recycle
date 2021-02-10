import { InputField } from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import IconBox from "../assets/icon-box-primary.svg";
import { postBoxById } from "../api/boxes";
import { useHistory } from "react-router-dom";
import { HeaderBackButton } from "../components/HeaderBackButton";

export default function AddNewBox() {
  const [title, setTitle] = useState("");
  const [item, setItem] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postBoxById({
      title: title,
      item: item,
    });
    history.push("/box");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HeaderBackButton headline={"Eine neue Box"}></HeaderBackButton>
      <InputField
        title="Name der Box"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <InputField
        title="Erster Eintrag"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <Button regular type="submit" value="AddNewBox">
        <p>Neue Box erstellen</p>
        <img src={IconBox} alt="Icon Box" />
      </Button>
    </form>
  );
}
