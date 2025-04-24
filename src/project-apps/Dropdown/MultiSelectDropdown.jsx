import { useState } from "react"
import COUNTRIES from "./countries"

export default function MultiSelectDropdown() {
    const [selectedCountries, setSelectedCountries] = useState([])

    const [showSelected, setShowSelected] = useState(false)

    function handleSelectOption(e) {
        const newArray = Array.from(e.target.selectedOptions).map(option => option.value)
        setSelectedCountries()
    }

    

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-xl space-y-4"> 
            <select 
                disabled={showSelected} 
                multiple 
                onChange={handleSelectOption}
                className="w-full h-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {COUNTRIES.map(country => (
                    <option  className="p-2" key={country}>{country}</option>
                ))} 
            </select>
            <div className="flex justify-between">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50" disabled={selectedCountries.length === 0} onClick={() => setShowSelected(true)}>Show Selected</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" onClick={() => {setShowSelected(false); setSelectedCountries([])}}>Clear</button>
            </div>
            {showSelected &&
            <ul className="list-disc list-inside text-gray-700">
                {selectedCountries.map(country => (
                    <li key={country}>{country}</li>
                ))}
            </ul>
            }
        </div>
    )
}