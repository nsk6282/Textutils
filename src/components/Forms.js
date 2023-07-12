// import React from 'react';
import React,{ useState } from 'react';



export default function Forms(props){
    
    const [text,setText] = useState('Enter text here');
    
    const handleOnChange=(event)=>{
        setText(event.target.value);
        console.log("change "+ text);
    };
    const handleUpClick=()=>{
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Text converted to uppercase!","success");


    };
    const handleLoClick=()=>{
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Text converted to lowercase!","success");

    };
    const clearText=()=>{
        let newText = ""; 
        setText(newText);
        props.showAlert("Text cleared!","success");

    };
    const removeExtraSpaces=()=>{
        let newText = text.replace(/\s+/g,' ').trim();
        setText(newText);
        props.showAlert("Extra spaces cleared!","success");

    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    function wordscount(str){
        let newText = str.replace(/\s+/g,' ').trim();
        var c = newText.split(" ").length;
        if(newText[newText.length-1]===" " || newText.length===0){
            return c-1;
        }
        else if(newText===""){
            return 0;
        }
        else{
            return c;
        }

    }


    
    return(
        <>
        <div style={{color:props.mode==='light'?'black':'white'}} className="container">
            <h1>{props.title}</h1>
                <div className="container">
                <textarea className="form-control" value={text} id="floatingTextarea2" onChange={handleOnChange}  rows="8" style={{backgroundColor:props.mode==='light'?'black':'white', color:props.mode==='dark'?'black':'white'}}></textarea> 
                </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        
        </div>
        <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>The number of words are {wordscount(text)} and number of characters are {text.replace(/\s+/g,' ').trim().length}</p>
            <p> {wordscount(text)*0.008 } minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length===0?"Nothing to preview":text}</p>

        </div>
        </>
        
    );
}