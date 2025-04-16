import { useState } from "react"
import DUMMY_TASKS from "./tasks"

export default function AddTask() {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState(DUMMY_TASKS)

  function handleChange(e) {
    setNewTask(e.target.value)
  }

  function handleClick() {
    if (!newTask.trim()) return
    setTasks(prev => [...prev, newTask])
    setNewTask("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Add a Task
        </h2>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={handleChange}
            placeholder="Add Task"
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
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
