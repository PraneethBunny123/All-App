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
                className="w-full bg-white text-sm font-medium border border-gray-300 px-4 py-2 rounded-xl shadow hover:border-blue-400 focus:outline-none transition"
            >
                {selectedTags?.length >0 ? (
                    <div className="flex flex-wrap gap-2">
                        {selectedTags.map(tag => (
                            <span className="bg-[#d6e4f0] text-[#36506b] text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                ) : (
                    <span className="text-gray-400">🏷️Choose Tags</span>
                )}
            </button>
            {isDropdownOpen && (
                <div className="mt-2 w-full bg-white border border-gray-300 rounded-xl shadow max-h-48 overflow-y-auto">
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
