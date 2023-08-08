import React, { useState } from "react";

export default function Textform(props) {

    const handleUpClick=()=>{
        console.log('uppercase was clicked'+ text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleLoClick=()=>{
      console.log("convert to lowercase");
      let newText=text.toLowerCase();
      setText(newText)
    }
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"> </textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    
    <div className="container">
        <p className="my-3">{text.split(" ").length} words and {text.length} characters in your paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  
  );
}
