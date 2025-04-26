import { useState } from "react"
import COUNTRIES from "./countries"

export default function SearchableDropdown() {
    const [search, setSearch] = useState('')
    const [selectedCountry, setSelectedCountry] = useState([])

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function handleSelectCountry(country) {
        setSelectedCountry(prevState => [...prevState, country])
    }

    console.log(selectedCountry)

    const filteredCountries = COUNTRIES.filter(country => country.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <label>Searchable Dropdown</label>
            <input placeholder="search" type="text" onChange={handleSearch}/>
            {
            <ul>
                {filteredCountries.map(country => (
                    <li key={country}>
                        <button onClick={() => handleSelectCountry(country)}>{country}</button>
                    </li>
                ))}
            </ul>
            }
        </div>
    )
}