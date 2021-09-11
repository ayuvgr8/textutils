import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
       // console.log("Uppercase was Clicked" + text ); // just for the debugging("yahan pe "text" call ho rha hai")
        let newText= text.toUpperCase();  // we made a variable to hold the new changes after using function uppercase 
        setText(newText);
    }

     const handleUpClick2 = () => {
       // console.log("Uppercase was Clicked" + text ); // just for the debugging("yahan pe "text" call ho rha hai")
       let newText2 = text.toLowerCase();
       setText(newText2);
     };
    const handleOnChange = (event) => {
     // console.log("On Change"); // just for the debugging
      setText(event.target.value);
    };
    const [text, setText] = useState("Enter Text Here  ");

    // text="new Text" // Wrong way to set text
    // setText("New Text is Here"); //Correct way to set text

  return (
    <><div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
          </div>
          <button className="mb-7 my-8   btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
         <button className="mb-7 my-8  btn btn-primary" onClick={handleUpClick2}>Convert To Lowercase</button>  
      </div>
     </>
  );
}
