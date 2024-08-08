import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Display from './components/Display';
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [data, setData] = useState({})
  return (
    <div className="App">
    <Form datafromform={setData}></Form>
    {/* <Display data={data}></Display> */}
    <Routes>
        <Route path="/:category/:ID" element={<Display data={data}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
