import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.length > 0 && (
        <div>
          <div className="definition">
            {props.meaning.definitions[0].definition}
          </div>

          <div className="example">{props.meaning.definitions[0].example}</div>

          <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        </div>
      )}
    </div>
  );
}
