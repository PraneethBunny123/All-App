import { tagOptions } from "./MOCK_DATA"

export default function TagsDropdown() {
    return (
        <div>
            <select
                multiple
            >
                {tagOptions.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                ))}
            </select>
        </div>
    )
}
