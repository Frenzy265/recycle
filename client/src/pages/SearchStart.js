import { FormInput } from "../components/Form";
import { List } from "../components/ListItem";
import IconSearch from "../assets/icon-search-primary.svg";
import IconArrowForward from "../assets/icon-arrow-forward-primary.svg";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllResults } from "../api/search";

export default function Search() {
  const [results, setResults] = useState([]);

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
      <FormInput
        title="Was möchtest du recyceln?"
        icon={IconSearch}
        alt="Icon Search"
      />
      {results?.map((result) => (
        <Link key={result._id} to={`/search/${result.title}`}>
          <List
            item={result.title}
            icon={IconArrowForward}
            alt="Icon Arrow Forward"
          />
        </Link>
      ))}
    </>
  );
}
