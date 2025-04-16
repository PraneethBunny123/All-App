import { useRef, useState } from "react"
import DUMMY_TASKS from "./tasks"

export default function FinalTodoApp() {

    const inputRef = useRef()
    const [tasks, setTasks] = useState(DUMMY_TASKS)
    const [searchInput, setSearchInput] = useState('')
   
    const filteredDate = tasks.filter(task => (
        task.includes(searchInput)
    ))

    function handleAddTask() {
        const newTask = inputRef.current.value
        setTasks(prevState => (
            [...tasks, newTask]
        ))
        inputRef.current.value = ''
    }

    function handleDelete(taskToDelete) {
        setTasks(prevState => (
            prevState.filter(task => task !== taskToDelete)
        ))
    }

    function handleSearchInput(e) {
        setSearchInput(e.target.value)
    }
    

    return (
        <div>
            <div>
                <input 
                    type="text"
                    placeholder="search tasks..."
                    onChange={handleSearchInput}

                />
            </div>
            <div>
                <input 
                    type="text"
                    placeholder="Add new task"
                    ref={inputRef}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <h2>Task list</h2>
            <ul>
                {filteredDate.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span> <button onClick={() => handleDelete(task)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}