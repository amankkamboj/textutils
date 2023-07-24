import React,{useState} from 'react';

function TextForm(props) {
    const handelResetClick = () => {
        setText("Enter your text here");
    }
    const handelUpClick= ()=>{
        console.log("on click convert upper");
        let myUpText = text.toUpperCase();
        setText(myUpText);
        props.showAlert("Converted to upper case","success");
    }
    const handelLowerClick = ()=>{
        let myUpText = text.toLowerCase();
        setText(myUpText);
        props.showAlert("Converted to lower case","info");
    }
    const handelUpChange = (event) =>{
        console.log("Handel on change");
        let currentText= event.target.value;
        setText(currentText);
    }
    // usestate to handel the side effect 
    const [text,setText]=useState("Enter your text here");
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
    <h1>{props.heading}</h1>
  <div className="mb-3">  
  <textarea onChange={handelUpChange} className={`form-control mb-3 text-${props.mode==='light'?'dark':'light'} bg-${props.mode}`} rows="8" value={text}></textarea>
  <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert Uppercase</button>
  <button className="btn btn-danger mx-1" onClick={handelResetClick}>Reset</button>
  <button className="btn btn-info" onClick={handelLowerClick}>Convert Lower</button>
    </div>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{ return element.length!==0 }).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read..</p>
    <h2>Text Prieview</h2>
    <p>{text}</p>

    </div>



    </>
  )
}

export default TextForm