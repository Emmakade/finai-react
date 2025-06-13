import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;