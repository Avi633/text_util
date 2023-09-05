import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React,{ useState } from 'react';
import Alert from './component/Alert.js';
import Aboutus from './component/Aboutus';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  const [alert, setAlert] = useState({
    msg:'this is a light mode',
    type:'success '


  });

  const [mode, setMode] = useState("light"); 


  const showAlert=(message,type)=>{
    setAlert( {
    msg: message,
     type: type
    }
    );
 
 } 
 


  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("this is a dark mode","success");

    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("this is a light mode","success");

    }
  }

  
  return (
   <>
   <Router>
   <Navbar item="tex"  action="hello" mode={mode} toggleMode={toggleMode}/>
   
   <div>
   <Switch>
   
    <Route key="about" path='/about'>
    <Aboutus />
    
    </Route>
    <Route path='/Home' key="home">
    <Alert alert={alert}/>
    <Textform ro="18" heading="Enter the text below" mode={mode}/>
    </Route>
     </Switch>
     </div>
   </Router>
   </>
  );
}

export default App;
