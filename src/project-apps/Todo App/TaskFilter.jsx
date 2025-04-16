import { useState } from "react"
import DUMMY_TASKS from "./tasks"

export default function TaskFilter() {
    const [searchInput, setSearchInput] = useState('')
    const filteredDate = DUMMY_TASKS.filter(task => task.toLowerCase().includes(searchInput.toLowerCase()))

    function handleChange(e) {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                    Search Tasks
                </h2>
                <input 
                    type="text"
                    value={searchInput}
                    onChange={handleChange}
                    placeholder="Type to search..."
                    className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ul className="space-y-2">
                    {filteredDate.map((task, index) => (
                        <li 
                            key={index}
                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md shadow-sm"
                        >
                            {task}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}