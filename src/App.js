import {React, useState } from 'react';
import './App.css';
import Alert from './components/alert';
import About from './components/About';
// import {Navbar} from './components/Navbar'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  // BrowserRouter as Router,
  HashRouter,
  Routes,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [alert,setAlert] = useState(null);

  const [mode,setMode] = useState('light');

  const showAlert = (msg,code)=>{
    setAlert({msg: msg, code: code});
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#151B54';
      showAlert("Dark mode successfully applied","success");
      setTimeout(()=>setAlert(null),1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode successfully applied","success");
      setTimeout(()=>setAlert(null),1500);

    }
    // console.log(mode);
  }

  return (
    <>
      
      <HashRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} alert={alert} />
        {/* <Navbar /> */}
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            {/* <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <TextForm heading="Enter text to analyze" mode={mode} alert={showAlert}/>
            </Route> */}
            <Route exact path='/about' element={<About mode={mode} />} />
            <Route exact path='/' element={<TextForm heading="Enter text to analyze" mode={mode} alert={showAlert}/>} />
          </Routes>       
        </div>
      </HashRouter>
    </>
      
      
    
  );
}

export default App;
