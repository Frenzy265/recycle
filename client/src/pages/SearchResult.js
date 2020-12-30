import React, { useEffect, useState } from "react";
import { TextBox } from "../components/TextBox";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import IconLightBulb from "../assets/icon-lightbulb-action.svg";
import Header from "../components/Header";
import { getResult } from "../api/search";
import { useParams } from "react-router-dom";

export default function SearchResult() {
  const [result, setResult] = useState();
  const { title } = useParams();

  useEffect(() => {
    async function fetchData() {
      const newResult = await getResult(title);
      setResult(newResult);
    }
    fetchData();
  }, [title]);

  return (
    <>
      {result && (
        <>
          <Header title={result.title.replaceAll(/\s/g, " / ")} />
          <TextBox
            icon={IconRecycle}
            alt="Icon Recycle"
            headline="Entsorgungsmöglichkeit"
            text={result.disposal}
          />
          {result.gtn ? (
            <TextBox
              icon={IconLightBulb}
              alt="Icon Lightbulb"
              headline="Wussten Sie schon..."
              text={result.gtn}
            />
          ) : null}
        </>
      )}
    </>
  );
}
