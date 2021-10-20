// import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";
// import About from './About';
function App() {
  const [modee, setmodee] = useState("light");  //whether dark mode is enabled or not
  const [textChange, settextChange] = useState("Enable dark mode");
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
     setalert({
       msg:message,
       typ:type,
     })
    }
    setTimeout(() => {
        setalert(null);
    }, 2000);
  //  setInterval(() => {
  //    document.title="😇downolad my app";
  //  }, 1500);
  //  setInterval(() => {
  //   document.title="🤪";
  // }, 2000);
  
  const toggleColorChange=()=>{
    if(modee==="dark")
    {
    setmodee("light");
    settextChange("Enable dark mode");
    document.body.style.backgroundColor="white";
    showAlert("You have disabled dark mode","danger");
   }
  else
      {
    setmodee("dark");
    settextChange("Disable dark mode");
    document.body.style.backgroundColor="#21236c";
    showAlert("You have enabled dark mode","success");
      }
    }
  return (
    <>
          <Navbar Title="Textutlis" homedena="Home" Linkdena="About" mode={modee}  changeText={textChange} clickSwitch={toggleColorChange}/>
          <Alert alertShow={alert} />
          <div className="container">
          <TextForm heading="Enter your text here " mode={modee} functionToggle={showAlert}/>
          </div>
    </>
  );
}

export default App;
