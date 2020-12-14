import { List } from "../components/ListItem";
import IconArrowForward from "../assets/icon-arrow-forward-primary.svg";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllResults } from "../api/search";
import { InputField } from "../components/Input";

export default function Search() {
  const [results, setResults] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const newResults = await getAllResults();
      setResults(newResults);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header>Suche</Header>
      <InputField
        value={searchFilter}
        title="Was möchtest du recyceln?"
        onChange={(event) => setSearchFilter(event.target.value.toLowerCase())}
      />

      {results
        .filter((result) => result.title.toLowerCase().includes(searchFilter))
        .map((filteredResult) => (
          <Link key={filteredResult._id} to={`/search/${filteredResult.title}`}>
            <List
              item={filteredResult.title}
              icon={IconArrowForward}
              alt="Icon Arrow Forward"
            />
          </Link>
        ))}
    </>
  );
}
