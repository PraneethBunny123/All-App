import { useState } from "react"
import COUNTRIES from "./countries"

export default function MultiSelectDropdown() {
    const [selectedCountries, setSelectedCountries] = useState([])

    const [showSelected, setShowSelected] = useState(false)

    function handleSelectOption(e) {
        const newArray = Array.from(e.target.selectedOptions).map(option => option.value)
        setSelectedCountries(newArray)
    }

    

    return (
        <div>
            <select disabled={showSelected} multiple onChange={handleSelectOption}>
                {COUNTRIES.map(country => (
                    <option key={country}>{country}</option>
                ))} 
                <option>hello 3</option>
            </select>
            <div>
                <button onClick={() => setShowSelected(true)}>Show Selected</button>
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