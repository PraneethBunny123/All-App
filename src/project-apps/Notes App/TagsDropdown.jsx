import { useState } from "react"
import { tagOptions } from "./MOCK_DATA"

export default function TagsDropdown() {
    const [selectedTags, setSelectedTags] = useState([])

    function handleSelectTags(e) {
        const tagsArray = Array.from(e.target.selectedOptions).map(tag => tag.value)

        setSelectedTags(prevTags => 
            [...new Set([...prevTags, ...tagsArray])]
        )
    }

    console.log(selectedTags)

    return (
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
    )
}
