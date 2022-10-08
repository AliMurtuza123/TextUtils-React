import { useState } from "react";

export default function TextForm(props){

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleOnClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("String converted to uppercase successfully","success");
        setTimeout(()=>props.alert(null),1500);
    }

    const handleOnLowClick = ()=>{
        let lowText = text.toLowerCase();
        setText(lowText);
        props.alert("String converted to lowercase successfully","success");
        setTimeout(()=>props.alert(null),1500);
    }

    function handleOnCap(){
        let bap = text.toLowerCase();
        let dap = bap.split(" ");
        let cap = "";
        dap.forEach(
            (aap)=>{
                let taap = aap.charAt(0).toUpperCase() + aap.slice(1);
                cap = cap + taap + " ";
            }
        );
        setText(cap);
        props.alert("String capitalized successfully","success");
        setTimeout(()=>props.alert(null),1500);
    }

    function handleOnClearClick(){
        let clearText = '';
        setText(clearText);
        props.alert("String cleared successfully","success");
        setTimeout(()=>props.alert(null),1500);
    }

    const [text,setText] = useState("");
    const readTime = text.split(" ").filter(elm => elm.length !== 0).length * 0.0032;

    let wordCount = text.split(/\s+/).filter(elm => elm.length !== 0).length;
    const charCount = text.length;

    const onCopy = ()=>{
        navigator.clipboard.writeText(text);
        // alert("your text got copied");
        props.alert("String copied successfully","success");
        setTimeout(()=>props.alert(null),1500);
    }

    const onXSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("Extra space removed successfully","success");
        setTimeout(()=>props.alert(null),1500);
    }
    return (
        <div style={ {color: props.mode === 'light' ? '#151B54' : 'white'} }>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea style={ {color: props.mode === 'light' ? '#151B54' : 'white', backgroundColor: props.mode === 'dark' ? '#292F68' : 'white'} } className={`form-control ${props.mode === 'dark' ? 'p' : 'q'}`} value={text} id="myBox" rows="8" onChange={handleOnChange} placeholder="Enter Text Here"></textarea>
        </div> 
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleOnClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleOnLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleOnCap} >Capitalize</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleOnClearClick} >Clear</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={onCopy} >Copy</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={onXSpace} >Remove Xtra Space</button>

        <hr />
        <h3>Your Text Summary</h3>
        <p>{wordCount} words and {charCount} characters</p>
        <p>{readTime} minutes({(readTime*60)} seconds) read</p>
        <h3>Preview</h3>
        <p>{text ? text : 'Enter something to preview'}</p>
        </div>
      
          
    );
}