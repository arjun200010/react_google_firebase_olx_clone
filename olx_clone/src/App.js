import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { AuthContext } from './store/firebasecontext';
function App() {
  const {user}=useContext(AuthContext)
  useEffect(()=>{
    console.log(user)
  })
  return (
    <div>
      <Router>
        <Routes>
          < Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
