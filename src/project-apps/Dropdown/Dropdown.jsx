import { useState } from "react"
import COUNTRIES from "./countries"

export default function Dropdown() {
    const [selectedCountry, setSelectedCountry] = useState('')

    function handleOnChange(e) {
        setSelectedCountry(e.target.value)
    }

    
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
            <select 
                value={selectedCountry} 
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value='' disabled>-- Select Country --</option>
                {COUNTRIES.map(country => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}  
            </select>
            <p className="text-gray-700 text-sm">
                Selected Country: <span className="font-semibold">{selectedCountry || 'None'}</span>
            </p>
        </div>
    )
}
