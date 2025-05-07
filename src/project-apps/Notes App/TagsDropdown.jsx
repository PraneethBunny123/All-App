import { tagOptions } from "./MOCK_DATA"

export default function TagsDropdown({selectedTags, setSelectedTags, isDropdownOpen, setIsDropdownOpen}) {

    function handleTagSelection(tag) {
        if(selectedTags.includes(tag)) {
            setSelectedTags(prevTags => prevTags.filter(t => t !== tag))
        }else{
            setSelectedTags(prevTags => [...prevTags, tag])

        }
    }

    return (
        <div>
            <label className="block mb-1 font-medium text-gray-700">Select Tags:</label>
            <button 
                onClick={() => setIsDropdownOpen(prev => !prev)}
                className="w-full border px-5 py-3 rounded-xl bg-white shadow hover:border-blue-400 focus:outline-none text-sm font-medium"
            >
                {selectedTags?.length >0 ? selectedTags.join(', ') : '🏷️Choose Tags'}
            </button>
            {isDropdownOpen && (
                <div className="mt-2 w-full bg-white border rounded-xl shadow max-h-48 overflow-y-auto">
                    {tagOptions.map(tag => (
                        <div 
                            key={tag} 
                            onClick={() => handleTagSelection(tag)}
                            className={`px-5 py-2 flex items-center cursor-pointer hover:bg-blue-100 text-sm ${selectedTags.includes(tag) ? "bg-blue-100 font-semibold" : ""}`}   
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
