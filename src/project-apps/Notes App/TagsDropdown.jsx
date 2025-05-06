import { tagOptions } from "./MOCK_DATA"
import { TagsDropdownContext } from "./TagsContext"

export default function TagsDropdown() {

    function handleSelectTags(e) {
        const tagsArray = Array.from(e.target.selectedOptions).map(tag => tag.value)

        setSelectedTags(prevTags => 
            [...new Set([...prevTags, ...tagsArray])]
        )
    }

    return (
        <TagsDropdownContext.Provider value={selectedTags}>
            <div>
                <select
                    multiple
                    onChange={handleSelectTags}
                >
                    {tagOptions.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
        </TagsDropdownContext.Provider>
    )
}
