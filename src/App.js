import React from 'react';
import {BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Navbar from './app/components/navbar/navbar';
import Home from "./app/views/Home";
import Test from './app/views/Test';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Test/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
