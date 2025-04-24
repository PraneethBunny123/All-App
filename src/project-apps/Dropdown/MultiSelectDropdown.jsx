import { useState } from "react"
import COUNTRIES from "./countries"

export default function MultiSelectDropdown() {
    const [selectedCountries, setSelectedCountries] = useState([])

    const [showSelected, setShowSelected] = useState(false)

    function handleSelectOption(e) {
        const newArray = Array.from(e.target.selectedOptions).map(option => option.value)
        setSelectedCountries(prev => [...prev, ...newArray])
    }

    

    return (
        <div>
            <select disabled={showSelected} multiple onChange={handleSelectOption}>
                {COUNTRIES.map(country => (
                    <option key={country}>{country}</option>
                ))} 
            </select>
            <div>
                <button disabled={selectedCountries.length === 0} onClick={() => setShowSelected(true)}>Show Selected</button>
                <button onClick={() => {setShowSelected(false); setSelectedCountries([])}}>Clear</button>
            </div>
            {showSelected &&
            <ul>
                {selectedCountries.map(country => (
                    <li key={country}>{country}</li>
                ))}
            </ul>
            }
        </div>
    )
}