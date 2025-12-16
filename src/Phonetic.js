//import react from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (

    <div className="Phonetic">
      /* eslint-disable-next-line react/jsx-no-target-blank */
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
      {props.phonetic.text}
    </div>
  );
}