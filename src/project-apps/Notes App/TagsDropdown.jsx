import { tagOptions } from "./MOCK_DATA"

export default function TagsDropdown() {
    return (
        <div>
            <select>
                {tagOptions.map(tag => (
                    <option>{tag}</option>
                ))}
                <option />
            </select>
        </div>
    )
}
