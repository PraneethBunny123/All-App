import { useEffect, useRef, useState } from "react"
import DUMMY_TASKS from "./tasks"
import AddTaskFeature from "./AddTask"
import ListRender from "./ListRender"

export default function FinalTodoApp() {

    const inputRef = useRef()
    const [tasks, setTasks] = useState(() => {
        const storedData = localStorage.getItem('final-todo-app')
        return storedData? JSON.parse(storedData) : DUMMY_TASKS
    })
    const [searchInput, setSearchInput] = useState('')


    useEffect(() => {
        localStorage.setItem('final-todo-app', JSON.stringify(tasks))
    }, [tasks])
   
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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
                <div className="mb-4">
                    <input 
                        type="text"
                        placeholder="search tasks..."
                        onChange={handleSearchInput}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <AddTaskFeature inputRef={inputRef} handleAddTask={handleAddTask}/>
                <h2 className="text-lg font-semibold mb-2 text-center text-gray-700">Task list</h2>
                <ListRender filteredData={filteredData} handleDelete={handleDelete}/>
            </div>
        </div>
    )
}