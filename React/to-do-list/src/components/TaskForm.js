import React, { useState } from 'react';

const TaskForm = (props) => {


    const [text, setText] = useState("");
    const [isCompleted, setCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTask = { text, completed: isCompleted };
        
        props.onAddTask({text:text, isCompleted:false});
                setCompleted(false);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add new Task</h1>
            <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <input type="submit" value="Add" />
        </form>
    );
}

export default TaskForm;
