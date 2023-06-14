import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
function App() {

  useEffect(()=>{
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
    .then(res=>res.json)
    .then(json=>{
        
    })
  })
  return (
    <div className="App">
      <header className="App-header">
          
      </header>
    </div>
  );
}

export default App;
