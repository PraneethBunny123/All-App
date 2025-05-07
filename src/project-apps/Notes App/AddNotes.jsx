import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import TagsDropdown from "./TagsDropdown"

export default function AddNotes({setNotes, selectedTags, setSelectedTags, isDropdownOpen, setIsDropdownOpen}) {
    const [textTyped, setTextTyped] = useState('')

    function handleOnChange(e) {
        setTextTyped(e.target.value)
    }

    function handleAddNotes() {
        const now = new Date()
        const timeStamp = now.toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        })
        
        if(textTyped.trim() !== '') {
            setNotes(prevNotes => [...prevNotes, {
                id: uuidv4(),
                Notes: textTyped,
                timeStamp: timeStamp,
                tags: [...selectedTags]
            }])
            setTextTyped('')
        }
        setIsDropdownOpen(false)
        setSelectedTags([])
    }

    return (
        <div className="bg-white shadow-md rounded-xl p-4 mb-6 space-y-3">
            <input 
                value={textTyped} 
                onChange={handleOnChange} 
                type="text" 
                placeholder="Add a new Note..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <TagsDropdown 
                selectedTags={selectedTags} 
                setSelectedTags={setSelectedTags}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
            />
            <button 
                onClick={handleAddNotes}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
            >
                Add Note
            </button>
        </div>

    )
}
