import { useState } from "react"
import DUMMY_TASKS from "./tasks"

export default function DeleteTask() {
    const [tasks, setTasks] = useState(DUMMY_TASKS)

    function handleDelete(removeIndex) {
        setTasks(prevState => (
            prevState.filter((task, index) => index !== removeIndex)
        ))
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                    Your Tasks
                </h2>
                <ul className="space-y-2">
                    {tasks.map((task, index) => (
                        <li 
                            key={index}
                            className="flex justify-between items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-md shadow-sm"
                        >
                            <span>{task}</span>  
                            <button 
                                onClick={() => handleDelete(index)}
                                className="text-red-500 hover:text-red-700 text-sm"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}