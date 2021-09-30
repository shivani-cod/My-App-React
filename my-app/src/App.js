
import  React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import AboutUs from './components/AboutUs';
import BhootForm from './components/BhootForm';
import Navbar from './components/Navbar';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";




function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  const [btn , setbtn]=useState('warning');
  const [area,setArea]=useState('grey')


  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);

    },1500);
  }
    const toggleMode = ()=>{
    if(mode ==='light'){
      setbtn('primary')
      setMode('dark');
      setArea('grey')
      document.body.style.backgroundColor = '#280256';
      showAlert("DarkMode has been enabled","success");
      document.title = "My App - Dark Mode" 
    }else{
      setbtn('info')
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled","success")
    }
  }

  const greenMode = ()=>{
    if(mode ==='light' ||'dark'){
      setbtn('warning');
      setArea('#059d57')
      setMode('dark');
      document.body.style.backgroundColor = '#0e462c';
      showAlert("GreenMode has been enabled","success");
    }
  }

  const yellowMode = ()=>{
    if(mode ==='light'|| 'dark'){
      setbtn('dark');
      setArea('#d6a71e')
      setMode('dark');
      document.body.style.backgroundColor = '#564102';
      showAlert("YellowMode has been enabled","success");
   
    }
  }


  return (
    
    <>
     <Navbar title="MyApp" mode={mode}  toggleMode={toggleMode} greenMode={greenMode} yellowMode={yellowMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <BhootForm heading="Enter the text below" mode={mode} showAlert={showAlert}  button={btn} area={area}  />
  </div>
    {/* <Router>
  <Navbar title="MyApp" mode={mode}  toggleMode={toggleMode} greenMode={greenMode} yellowMode={yellowMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Switch>
    {/* /user-->compo1
    /users/comp2 */}
          {/* <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/">
          <BhootForm heading="Enter the text below" mode={mode} showAlert={showAlert}  button={btn} area={area}  />
          </Route>
        </Switch> */}
  
  
  
  {/* </div>
  </Router> */} 

 
  </>
  );

}

export default App;
