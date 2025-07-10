
import './App.css';
import React from 'react';
import { Routes, Route, Router } from "react-router"
import Test from './Test/Test';


function App() {

  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Test/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
