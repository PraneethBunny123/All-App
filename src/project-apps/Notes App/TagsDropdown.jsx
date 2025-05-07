import { useState } from "react"
import { tagOptions } from "./MOCK_DATA"

export default function TagsDropdown({setSelectedTags}) {

    const [isDropdownOpen, setIsDropDownOpen] = useState(false)

    function handleSelectTags(e) {
        const tagsArray = Array.from(e.target.selectedOptions).map(tag => tag.value)

        setSelectedTags(prevTags => 
            [...new Set([...prevTags, ...tagsArray])]
        )
    }

    return (
        <div>
            <label className="block mb-1 font-medium text-gray-700">Select Tags:</label>
            <button onClick={() => setIsDropDownOpen(prev => !prev)}>
                Choose Tags
            </button>
            {isDropdownOpen && (
                <div>
                    {tagOptions.map(tag => (
                        <div key={tag}>
                            <input 
                                type="checkbox"
                                readOnly
                            />
                            <span>{tag}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
