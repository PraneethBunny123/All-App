import { useState } from "react"

export default function SearchableDropdown() {
    const [search, setSearch] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    return (
        <div>
            <label>Searchable Dropdown</label>
            <input placeholder="search" type="text" onChange={handleSearch}/>
            <p>{search}</p>
        </div>
    )
}