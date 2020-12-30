import { List } from "../components/ListItem";
import IconArrowForward from "../assets/icon-arrow-forward-action.svg";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllResults } from "../api/search";
import { InputField } from "../components/Input";
import styled from "styled-components/macro";

const Navlink = styled(Link)`
  max-width: 80%;
`;

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
      <Header title="Suche" />
      <InputField
        value={searchFilter}
        title="Was möchtest du recyceln?"
        onChange={(event) => setSearchFilter(event.target.value.toLowerCase())}
      />

      {results
        .filter((result) => result.title.toLowerCase().includes(searchFilter))
        .map((filteredResult) => (
          <Navlink
            key={filteredResult._id}
            to={`/search/${filteredResult.title}`}
          >
            <List
              item={filteredResult.title.replaceAll(/\s/g, " / ")}
              icon={IconArrowForward}
              alt="Icon Arrow Forward"
            />
          </Navlink>
        ))}
    </>
  );
}
