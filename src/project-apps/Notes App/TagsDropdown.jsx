import { tagOptions } from "./MOCK_DATA"

export default function TagsDropdown() {
    return (
        <div>
            <select>
                {tagOptions.map(tag => (
                    <option value={tag}>{tag}</option>
                ))}
            </select>
        </div>
    )
}
