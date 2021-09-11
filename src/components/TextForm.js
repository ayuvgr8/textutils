import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was Clicked" + text );
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
      console.log("On Change");
      setText(event.target.value);
    };
    const [text, setText] = useState("Enter Text Here  ");

    // text="new Text" // Wrong way to set text
    // setText("New Text is Here"); //Correct way to set text

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button> 
    </div>
  );
}
