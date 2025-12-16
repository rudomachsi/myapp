//import react from "react";

export default function Phonetic({ text, audio }) {
  return (
    <div>
      {/* add rel="noreferrer noopener" when using target="_blank" */}
      <a href={audio} target="_blank" rel="noreferrer noopener">
        {text}
      </a>
    </div>
  );
}