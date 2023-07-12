// import React from 'react';
import React,{ useState } from 'react'
import PropTypes from 'prop-types';


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

    function wordscount(str){
        var c = str.split(" ").length;
        if(str[str.length-1]===" " || str.length===0){
            return c-1;
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
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
        
        </div>
        <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>The number of words are {wordscount(text)} and number of characters are {text.length}</p>
            <p> {wordscount(text)*0.008 } minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length===0?"Enter something to get preview":text}</p>

        </div>
        </>
        
    );
}