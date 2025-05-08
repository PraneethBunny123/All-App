import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import TagsDropdown from "./TagsDropdown"

export default function AddNotes({setNotes}) {
    const [textTyped, setTextTyped] = useState('')

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedTags, setSelectedTags] = useState([])

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
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 space-y-4">
            <input 
                value={textTyped} 
                onChange={handleOnChange} 
                type="text" 
                placeholder="📝 Write your note here..."
                className="w-full px-5 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <TagsDropdown 
                selectedTags={selectedTags} 
                setSelectedTags={setSelectedTags}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
            />
            <button 
                onClick={handleAddNotes}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition"
            >
                Add Note
            </button>
        </div>

    )
}
