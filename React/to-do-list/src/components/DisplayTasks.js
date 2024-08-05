import React from 'react';
import styles from './DisplayTasks.module.css';

const DisplayTasks = ({ tasks, checkComplete, onDelete}) => {
    



    return (
        <div>
            <ul>
                {tasks.map((task, i) => (
                    <div key={i} className={styles.task}>
                        <li>{task.completed ? <del>{task.text}</del> : task.text}</li>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => checkComplete(i)}
                        />
                        <button onClick={() => onDelete(i)} >Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default DisplayTasks;


