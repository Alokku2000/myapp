import React,{useState} from 'react'

export default function TextForm(props) {
    // onclick function for converting the text to upper case 
    const handleUpClick=()=>{
        if(text.length===0)
           alert("Write something in text box to see changes");
        else
        {
        setText(text.toUpperCase());
        props.functionToggle("converted to uppercase","success");
        }
    }
    // onclick function for converting the text to Lower case
    const handleLoClick=()=>{
        if(text.length===0)
           alert("Write something in text box to see changes");
        else
        {
        setText(text.toLowerCase());
        props.functionToggle("converted to Lowercase","success");
        }
    }
    //clear the text
    const Clear=()=>{
       if(text.length===0)
        alert("Write something in text box to see changes");
       else
       {
       setText("");
       props.functionToggle("Text cleared","success");
       }
    }
    //capturing the event from user 
    const handleUpChange=(event)=>{
        setText(event.target.value);
        // console.log(event.target.value);
        console.log(text);
    }
    //Searching the word
    const searchWord=()=>{
        if(text.length===0)
        alert("Are you mad text is empty");
        else
         {
        let word=prompt("Enter the word you want to search");
         if(word===null)
           alert("No problem for cancelations");
         else
          {
        let ans=text.search(word);
        if(ans!==-1)
          alert("Word found");
        else
          alert("Not found");
          }
         }
    }
    //copy text button
    const [copyButton,changeButton]=useState("Copy text");
    //copy the whole text area
    const [text,setText]=useState("This is defualt text");
    const copy=()=>{
        if(text.length===0)
        alert("Write something in text box to see changes");
        else
        {
        changeButton("Text copied");
        const box=document.getElementById("area");
        box.select();
        console.log(navigator.clipboard.writeText(box.value));
        props.functionToggle("Text copied","success");
        }
    }
    return (
        <>
       <div className="mb-3 my-3">
       <label htmlFor="area" className="form-label" style={{color:props.mode==="light"?"black":"white"}}>{props.heading}</label>
       <textarea className="form-control" id="area" rows="8" value={text} onChange={handleUpChange} style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}></textarea>
       </div>
       <button className={`btn btn-${props.mode==="light"?"primary":"warning"} mx-2`} onClick={handleUpClick}>Convert to upper case</button>
       <button className={`btn btn-${props.mode==="light"?"primary":"warning"} mx-3`} onClick={handleLoClick}>Convert to lower case</button>
       <button className={`btn btn-${props.mode==="light"?"primary":"warning"} mx-2`} onClick={Clear}>Clear</button>
       <button className={`btn btn-${props.mode==="light"?"primary":"warning"} mx-3`} onClick={searchWord}>search any word</button>
       <button className={`btn btn-${props.mode==="light"?"primary":"warning"} mx-3`} onClick={copy}>{copyButton}</button>

       <div className="conatiner my-3" style={{color:props.mode==="light"?"black":"white"}}>
           <h2>Your text summary</h2>
           <p>Total words are {text.split(" ").length}</p>
           <p>Total characters are {text.length}</p>
           <p>Time taken to read the document is {0.008*text.split(" ").length} Minutes</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Enter the text to preview"}</p>
       </div>
       </>
    )
}
