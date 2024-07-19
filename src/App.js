 import React from 'react';
 import './App.css';
 import Mainpage from './components/Mainpage';
 import Login from './components/Login';
 import Register from './components/Register';
 import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Mainpage/>
     <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/id" element={<Register/>}/>
     </Routes>

    </div>
  );
}

export default App;
