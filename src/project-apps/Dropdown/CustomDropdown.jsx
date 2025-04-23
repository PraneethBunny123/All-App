import { useState } from "react"
import COUNTRIES from "./countries"

export default function CustomDropdown() {
    const [selectedValue, setSelectedValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    function handleDropdown() {
        setIsOpen(prevState => !prevState)
    }

    function handleSelectValue(country) {
        setSelectedValue(country)
        setIsOpen(false)
    }

    return (
        <div className="relative w-64 mx-auto mt-10">
            <button 
                onClick={handleDropdown}
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-left shadow-sm hover:bg-gray-50"
            >
                {selectedValue === '' ? '--Select Country--' : selectedValue}
            </button>
            {isOpen && 
                <ul>
                    {COUNTRIES.map(country => (
                        <li key={country}>
                            <button onClick={() => handleSelectValue(country)}>{country}</button>
                        </li>
                    ))}
                </ul>
            }
            <p>Selected Country: {(!isOpen && selectedValue !== 'select country') ? selectedValue : 'None'}</p>
        </div>
    )
}