import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Routes} from "react-router-dom";
import 'styles/App.css';
import Index from 'pages/index.jsx';
import Rhodesian from 'pages/rhodesian.jsx';
import bulldogIngles from 'pages/bulldogIngles.jsx';



function App() {
  return (
  <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/rhodesian" element={<Rhodesian/>} />
            <Route path="/bulldogIngles" element={<bulldogIngles/>} />

        </Routes>           
             
    </BrowserRouter>         


  </div>  
    
  );
}


export default App;
