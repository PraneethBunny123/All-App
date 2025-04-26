import { useState } from "react"
import COUNTRIES from "./countries"

export default function SearchableDropdown() {
    const [search, setSearch] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    const [isActive, setIsActive] = useState(false)

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    return (
        <div>
            <label>Searchable Dropdown</label>
            <input placeholder="search" type="text" onChange={handleSearch}/>
            <p>{search}</p>
            {
            <ul>
                {COUNTRIES.map(country => (
                    <li key={country}>{country}</li>
                ))}
            </ul>
            }
        </div>
    )
}