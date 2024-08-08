import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]) 





  return (
    <div className="App">
      <TaskForm></TaskForm>

    </div>
  );
}

export default App;
