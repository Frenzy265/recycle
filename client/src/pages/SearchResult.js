import React, { useEffect, useState } from "react";
import { TextBox } from "../components/TextBox";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import IconLightBulb from "../assets/icon-lightbulb-action.svg";
import { getResult } from "../api/search";
import { useParams } from "react-router-dom";
import { HeaderBackButton } from "../components/HeaderBackButton";

export default function SearchResult() {
  const [result, setResult] = useState();
  const { title } = useParams();

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      const newResult = await getResult(title);
      if (mounted) {
        setResult(newResult);
      }
    }
    fetchData();
    return () => {
      mounted = false;
    };
  }, [title]);

  return (
    <>
      {result && (
        <>
          <HeaderBackButton
            headline={result.title.replaceAll(/\s/g, " / ")}
          ></HeaderBackButton>
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
