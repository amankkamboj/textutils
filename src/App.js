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
  const removeBodyCls = ()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
  }

  const toggleMode= (cls) => {
    removeBodyCls();
    document.body.classList.add(`bg-${cls}`);
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
        <Route exact index element={<TextForm heading="Analyze your text here!" mode={mode} showAlert={showAlert} />} />
        <Route exact path="about" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
