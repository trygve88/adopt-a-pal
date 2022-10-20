import React from 'react';
import {BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Home from "./app/views/Home";
import Dog from "./app/views/Dog";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dog/" element={<Dog/>} />
          <Route exact path="/dog/:id" element={<Dog/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
