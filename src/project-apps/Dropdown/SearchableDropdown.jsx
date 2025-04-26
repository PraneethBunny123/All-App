import { useState } from "react"
import COUNTRIES from "./countries"

export default function SearchableDropdown() {
    const [search, setSearch] = useState('')
    const [selectedCountry, setSelectedCountry] = useState([])

    function handleSearch(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }

    function handleSelectCountry(country) {
        setSelectedCountry(prevState => [...prevState, country])
        setSearch('')
    }
    console.log(selectedCountry)

    const filteredCountries = COUNTRIES.filter(country => country.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <label>Searchable Dropdown</label>
            <input value={search} placeholder="search" type="text" onChange={handleSearch}/>
            {
            <ul>
                {filteredCountries.map(country => (
                    <li key={country}>
                        <button disabled={selectedCountry.includes(country)} onClick={() => handleSelectCountry(country)}>{country}</button>
                    </li>
                ))}
            </ul>
            }
            <div>
                <label>Selected Countries</label>
                <ul>
                    {selectedCountry.map(country => (
                        <li key={country}>{country}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}