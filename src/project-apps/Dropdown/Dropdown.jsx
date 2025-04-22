import { useState } from "react"
import COUNTRIES from "./countries"

export default function Dropdown() {
    const [selectedCountry, setSelectedCountry] = useState('')

    function handleOnChange(e) {
        setSelectedCountry(e.target.value)
    }

    console.log(selectedCountry)

    return (
        <div>
            <select value={selectedCountry} onChange={handleOnChange}>
                {COUNTRIES.map(country => (
                    <option key={country}>{country}</option>
                ))}  
            </select>
        </div>
    )
}