import React from 'react';
import {BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Navbar from './app/components/navbar/navbar';
import Home from "./app/views/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
