import React,{useState} from 'react';

function TextForm(props) {
    const handelResetClick = () => {
        setText("");
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
    const handelCopy= ()=>{
        let copy_txt= document.getElementById("myBox");
        copy_txt.select();
        navigator.clipboard.writeText(copy_txt.value);
        props.showAlert("Text Copied Successfully","info");
    }
    // usestate to handel the side effect 
    const [text,setText]=useState("");
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
    <h1>{props.heading}</h1>
  <div className="mb-3">  
  <textarea id='myBox' onChange={handelUpChange} className={`form-control mb-3 text-${props.mode==='light'?'dark':'light'} bg-${props.mode}`} rows="8" value={text}></textarea>
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handelUpClick}>Convert Uppercase</button>
  <button disabled={text.length===0} className="btn btn-danger mx-1" onClick={handelResetClick}>Reset</button>
  <button disabled={text.length===0} className="btn btn-info" onClick={handelLowerClick}>Convert Lower</button>
  <button disabled={text.length===0} className='btn btn-warning mx-1' onClick={handelCopy}>Copy Text</button>
    </div>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{ return element.length!==0 }).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0 }).length} Minutes read..</p>
    <h2>Text Prieview</h2>
    <p>{text}</p>

    </div>



    </>
  )
}

export default TextForm