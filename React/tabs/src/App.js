import React, { useState } from 'react';
import TaskForm from './TaskForm';
import DisplayTasks from './DisplayTasks';

const App = () => {
    const [tasks, setTasks] = useState([
        { text: "get MERN black belt", completed: false },
        { text: "get JAVA black belt", completed: false }
    ]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <TaskForm onAddTask={handleAddTask} />
            <DisplayTasks tasks={tasks} />
        </div>
    );
}

export default App;

