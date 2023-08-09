import React, { useState } from "react";

export default function Textform(props) {

  const [myStyle , setStyle]= useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [buttontext, setBtnText]= useState("Enable dark mode")

  const toggleMode=()=>{
    if(myStyle.color=='black'){
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Enable light mode")
    }
      else{
        setStyle({
          color: 'black',
          backgroundColor: 'white'
        })
        setBtnText("Enable dark mode")
    }
  }
 
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
      <div className="mb-3" >
        <textarea className="form-control" value={text}  style={myStyle} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"> </textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={toggleMode}>{buttontext}</button>
    </div>
    
    <div className="container">
        <p className="my-3">{text.split(" ").length} words and {text.length} characters in your paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>


{/* <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
</div> */}
    </>
  
  );
}
