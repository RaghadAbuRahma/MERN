import React, {useState} from 'react'

function TaskForm(props) {

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([]) 


    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("newTaskadded")
        addTask(task)
        console.log(tasks)

        setTask("")
    }

    const addTask = (task) => {
        setTasks([ ...tasks, task])
    
    }
return (

    <div>
    <form onSubmit={ handleSubmit }>
    <div>
        <label>Task: </label> 
        <input type="text" value={task} onChange={ (e) => setTask(e.target.value) } />
    </div>
    <input type="submit" value="add" />  
    </form>
    </div>
)
}

export default TaskForm