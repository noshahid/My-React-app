import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleOnChange = () => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter you text here");

  return (
    <div>
      <h1 class="my3">{props.heading}</h1>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-4" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
      </div>
    </div>
  );
}
