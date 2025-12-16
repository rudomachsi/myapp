//import react from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (

    <div className="Phonetic">
      return (
  <div>

  </div>
);
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
      {props.phonetic.text}
    </div>
  );
}