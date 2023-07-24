import React,{useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode= () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <Routes>        
        <Route exact index element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        <Route exact path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
