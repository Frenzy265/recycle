import { useQuery } from "react-query";
import { List } from "../components/ListItem";
import IconArrowForward from "../assets/icon-arrow-forward-action.svg";
import Header from "../components/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllResults } from "../api/search";
import { Searchfield } from "../components/Searchfield";

export default function Search() {
  const [searchFilter, setSearchFilter] = useState("");
  const { data: results, status } = useQuery("searchresults", getAllResults);

  return (
    <>
      <Header>Suche</Header>
      <Searchfield
        value={searchFilter}
        title="Was möchtest du recyceln?"
        onChange={(event) => setSearchFilter(event.target.value.toLowerCase())}
      />
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Es ist ein Fehler aufgetreten</div>}
      {status === "success" &&
        results
          .filter((result) => result.title.toLowerCase().includes(searchFilter))
          .map((filteredResult) => (
            <Link
              key={filteredResult._id}
              to={`/search/${filteredResult.title}`}
            >
              <List
                item={filteredResult.title.replaceAll(/\s/g, " / ")}
                icon={IconArrowForward}
                alt="Icon Arrow Forward"
              />
            </Link>
          ))}
    </>
  );
}
