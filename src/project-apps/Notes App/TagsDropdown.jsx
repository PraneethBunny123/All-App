import { tagOptions } from "./MOCK_DATA"

export default function TagsDropdown({setSelectedTags}) {

    function handleSelectTags(e) {
        const tagsArray = Array.from(e.target.selectedOptions).map(tag => tag.value)

        setSelectedTags(prevTags => 
            [...new Set([...prevTags, ...tagsArray])]
        )
    }

    return (
        <div>
        <label className="block mb-1 font-medium text-gray-700">Select Tags:</label>
            <select
                multiple
                onChange={handleSelectTags}
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                {tagOptions.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
            </select>
        </div>
    )
}
