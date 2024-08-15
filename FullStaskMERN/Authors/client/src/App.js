import './App.css';
import { useState , useEffect} from 'react';
import axios from 'axios';
import Main from './views/Main';
import "bootstrap/dist/css/bootstrap.min.css";


import {
  Routes,
  Route,
  link,
  Link

} from "react-router-dom";

function App() {

  // const [authors, setAuthors] = useState([])
  // const [loaded, setLoaded] = useState(false);






  return (
    <div className="App">
    <Link></Link>
    <Main/>
    </div>
  );
}

export default App;
