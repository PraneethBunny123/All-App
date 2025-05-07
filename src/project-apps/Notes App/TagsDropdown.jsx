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
            <button>
                Choose Tags
            </button>

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
    )
}
