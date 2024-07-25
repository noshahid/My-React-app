import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = () => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-primary my-4 mx-3" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary my-4 mx-3" onClick={handleLoClick}>
            Convert to lowerCase
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Summary</h1>
        <p>
          {text.split(" ").length} word and {text.length} charater
        </p>
        <p>{0.008 * text.split(" ").length} Mint Read</p>
        <h3>Priveiw</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
