// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import Aboutsection from './components/Aboutsection';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'



function App() {

  const [mode,setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("dark mode enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
    <div className=' my3' style={{width:"100%"}}>
      <Navbar title="Textutils" toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}  / >
      <Forms showAlert={showAlert} title="Enter text" mode={mode}/>
      {/* <Routes>
      <Route exact path="/" element={<Forms showAlert={showAlert} title="Enter text" mode={mode}/>}/>
      <Route exact path="/about" element={<Aboutsection/>}/>        
      </Routes> */}
    </div>
    {/* </Router> */}
    </>
    
  );
}

export default App;
