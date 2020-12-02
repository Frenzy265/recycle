import { useContext } from "react";
import TextField from "../components/TextField";
import { I18nContext } from "../context/i18n";

export default function Home() {
  const { dict } = useContext(I18nContext);
  return (
    <>
      <TextField>{dict.content}</TextField>
    </>
  );
}
