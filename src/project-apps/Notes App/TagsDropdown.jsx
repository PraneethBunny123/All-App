import { useState } from "react"
import { tagOptions } from "./MOCK_DATA"

export default function TagsDropdown({selectedTags, setSelectedTags}) {

    const [isDropdownOpen, setIsDropDownOpen] = useState(false)

    function handleTagSelection(tag) {
        if(selectedTags.includes(tag)) {
            setSelectedTags(prevTags => prevTags.filter(t => t !== tag))
        }else{
            setSelectedTags(prevTags => [...prevTags, tag])

        }
    }

    console.log(selectedTags)

    return (
        <div>
            <label className="block mb-1 font-medium text-gray-700">Select Tags:</label>
            <button 
                onClick={() => setIsDropDownOpen(prev => !prev)}
                className="w-full border px-4 py-2 rounded text-left bg-white shadow-sm hover:border-blue-400 focus:outline-none"
            >
                {selectedTags?.length >0 ? selectedTags.join(', ') : 'Choose Tags'}
            </button>
            {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg max-h-48 overflow-y-auto">
                    {tagOptions.map(tag => (
                        <div 
                            key={tag} 
                            onClick={() => handleTagSelection(tag)}
                            className={`px-4 py-2 flex items-center cursor-pointer hover:bg-blue-100 ${selectedTags.includes(tag) ? "bg-blue-100" : ""}`}    
                        >
                            <input 
                                type="checkbox"
                                readOnly
                                checked={selectedTags.includes(tag)}
                                className="mr-2"
                            />
                            <span>{tag}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
