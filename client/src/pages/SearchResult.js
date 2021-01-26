import React from "react";
import { useQuery } from "react-query";
import { TextBox } from "../components/TextBox";
import IconRecycle from "../assets/icon-recycle-primary.svg";
import IconLightBulb from "../assets/icon-lightbulb-action.svg";
import { getResult } from "../api/search";
import { useParams } from "react-router-dom";
import { HeaderBackButton } from "../components/HeaderBackButton";

export default function SearchResult() {
  const { title } = useParams();

  const { data: result, status } = useQuery(["resultbynae", title], () =>
    getResult(title)
  );

  console.log(result);

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Es ist ein Fehler aufgetreten</div>}
      {status === "success" && result && (
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
