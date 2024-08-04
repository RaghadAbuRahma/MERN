import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import DisplayTasks from './components/DisplayTasks';

const App = () => {
    const [tasks, setTasks] = useState([
        { text: "get MERN black belt", completed: false },
        { text: "get JAVA black belt", completed: false },
    ]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const setComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <TaskForm onAddTask={handleAddTask} />
            <DisplayTasks tasks={tasks} checkComplete={setComplete} />
        </div>
    );
}

export default App;

