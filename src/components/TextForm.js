import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked" + text ); // just for the debugging("yahan pe "text" call ho rha hai")
    let newText = text.toUpperCase(); // we made a variable to hold the new changes after using function uppercase
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("Uppercase was Clicked" + text ); // just for the debugging("yahan pe "text" call ho rha hai")
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change"); // just for the debugging
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here  ");

  // text="new Text" // Wrong way to set text
  // setText("New Text is Here"); //Correct way to set text

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="mx-2 my-2  btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="mx-2 my-2 btn btn-primary" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
