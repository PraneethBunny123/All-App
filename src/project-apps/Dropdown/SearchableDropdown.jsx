import { useEffect, useRef, useState } from "react"
import COUNTRIES from "./countries"

export default function SearchableDropdown() {
    const [search, setSearch] = useState('')
    const [selectedCountry, setSelectedCountry] = useState([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const dropdownRef = useRef(null)

    function handleSearch(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }

    function handleSelectCountry(country) {
        setSelectedCountry(prevState => [...prevState, country])
        setSearch('')
    }
    
    function handleClickOutside(e) {
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false)
            setSearch('')
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const filteredCountries = COUNTRIES.filter(country => country.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <label>Searchable Dropdown</label>
            <div ref={dropdownRef}>
                <input onFocus={() => setIsDropdownOpen(true)} value={search} placeholder="search" type="text" onChange={handleSearch}/>
                {isDropdownOpen &&
                <ul>
                    {filteredCountries.map(country => (
                        <li key={country}>
                            <button disabled={selectedCountry.includes(country)} onClick={() => handleSelectCountry(country)}>{country}</button>
                        </li>
                    ))}
                </ul>
                }
            </div>
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