import "./To-DoList.css"
import React, {useState} from "react";

export default function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== ""){
            setTasks((t => [...t, newTask]));
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="toDoList-container">
            <h1>To-Do-List</h1>
            <div>
                <input  
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) =>
                <li key={index}>
                    <span>{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button className="point-button" onClick={() => moveTaskUp(index)}>
                        👆
                    </button>
                    <button className="point-button" onClick={() => moveTaskDown(index)}>
                        👇
                    </button>
                </li>
                )}
            </ul>
        </div>
    );
}