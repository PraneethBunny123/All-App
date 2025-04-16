import { useRef, useState } from "react"
import DUMMY_TASKS from "./tasks"
import AddTaskFeature from "./AddTask"
import ListRender from "./ListRender"

export default function FinalTodoApp() {

    const inputRef = useRef()
    const [tasks, setTasks] = useState(DUMMY_TASKS)
    const [searchInput, setSearchInput] = useState('')
   
    const filteredData = tasks.filter(task => (
        task.toLowerCase().includes(searchInput.toLowerCase())
    ))

    function handleAddTask() {
        const newTask = inputRef.current.value.trim()
        if(!newTask) return

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
            <AddTaskFeature inputRef={inputRef} handleAddTask={handleAddTask}/>
            <h2>Task list</h2>
            <ListRender filteredData={filteredData} handleDelete={handleDelete}/>
        </div>
    )
}