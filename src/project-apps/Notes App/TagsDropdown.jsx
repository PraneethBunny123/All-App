import { useState } from "react"
import { tagOptions } from "./MOCK_DATA"

export default function TagsDropdown({selectedTags, setSelectedTags}) {

    const [isDropdownOpen, setIsDropDownOpen] = useState(false)

    function handleTagSelection(tag) {
        
    }

    return (
        <div>
            <label className="block mb-1 font-medium text-gray-700">Select Tags:</label>
            <button onClick={() => setIsDropDownOpen(prev => !prev)}>
                {selectedTags?.length >0 ? selectedTags.join(', ') : 'Choose Tags'}
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
