import { Inputfield } from "../components/Input";
import { List } from "../components/ListItem";
import IconSearch from "../assets/icon-search-primary.svg";
import IconArrowForward from "../assets/icon-arrow-forward-primary.svg";

export default function Search() {
  return (
    <>
      <Inputfield
        title="Was möchtest du recyceln?"
        icon={IconSearch}
        alt="Icon Search"
      />
      <List
        item="Fahrradreifen"
        icon={IconArrowForward}
        alt="Icon Arrow Forward"
      />
    </>
  );
}
