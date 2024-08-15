// import { Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Main2 from './views/Main2';
import {
  Route,
  Routes, 
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='routes'>
        <h2><Link to ={"/players"}>Manage Players</Link></h2> <h2>||</h2>
        <h2><Link to={"players/status"}>Status</Link></h2>
      </div>
      <Main></Main> 

      {/* <Main2></Main2>   */}
    
    <Routes>
      {/* <Route path={"/players"} element={<Main/>}></Route> */}
      {/* <Route path={"/players/status"} element={<Main2/>}></Route> */}
    </Routes>  
    </div>
  );
}

export default App;
