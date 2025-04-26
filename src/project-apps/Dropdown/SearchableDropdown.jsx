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
        //setSearch('')
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
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
            <label className="block text-gray-700 font-semibold mb-2">Searchable Dropdown</label>
            <div ref={dropdownRef}>
                <input 
                    onFocus={() => setIsDropdownOpen(true)} 
                    value={search} 
                    placeholder="search" 
                    type="text" 
                    onChange={handleSearch}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {isDropdownOpen &&
                <ul className="mt-2 border border-gray-300 rounded-lg max-h-60 overflow-y-auto bg-white shadow-md">
                    {filteredCountries.map(country => (
                        <li key={country}>
                            <button 
                                disabled={selectedCountry.includes(country)} 
                                onClick={() => handleSelectCountry(country)}
                                className="w-full text-left px-4 py-2 hover:bg-blue-100 disabled:opacity-50"
                            >
                                {country}
                            </button>
                        </li>
                    ))}
                </ul>
                }
            </div>
            <div>
                <label className="block text-gray-700 font-semibold mt-6 mb-2">Selected Countries</label>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {selectedCountry.map(country => (
                        <li key={country}>{country}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}