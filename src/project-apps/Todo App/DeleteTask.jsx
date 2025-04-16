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
        <div>
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                    Your Tasks
                </h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li 
                            key={index}
                        >
                            <span>{task}</span> - <button onClick={() => handleDelete(index)}>delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}