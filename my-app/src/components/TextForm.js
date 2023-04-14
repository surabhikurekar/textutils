import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UppaerCase", "success")
   
  };
  const handleOnChange = (event) => {
    console.log("UpparCase Changed");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" text Cleared !!", "success")
  };

  const handleCopy = () => {
    var text = document.getElementById('myText');
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert("Copied to clipboard!!", "success")

  };

  const handleExtraSpaces = () => {
   let newText =text.split(/[ ]+/);
   setText(newText.join(' '));
   props.showAlert("Extra Spaces Removed successfully!!", "success")

  };

  const [text, setText] = useState("");
  // setText("new Text");
  return (
    <>
      <div className="container my-2"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myText"
            rows="12"
            style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to UpparCase </button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick} > Convert to LowerCase </button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick} > To Clear Text </button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleCopy} > To Copy Text </button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpaces} > To Remove Extra Spaces </button>




      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read characters</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in TextBox Above to preview here"}</p>
      </div>
    </>
  );
}
