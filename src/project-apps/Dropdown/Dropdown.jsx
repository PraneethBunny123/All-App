import { useState } from "react"
import COUNTRIES from "./countries"

export default function Dropdown() {
    const [selectedCountry, setSelectedCountry] = useState('')

    function handleOnChange(e) {
        setSelectedCountry(e.target.value)
    }


    return (
        <div>
            <select value={selectedCountry} onChange={handleOnChange} >
                <option value='' disabled>-- Select Country--</option>
                {COUNTRIES.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}  
            </select>
            <p>selected country: {selectedCountry}</p>
        </div>
    )
}