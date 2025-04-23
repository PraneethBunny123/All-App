import { useState } from "react"
import COUNTRIES from "./countries"

export default function CustomDropdown() {
    const [selectedValue, setSelectedValue] = useState('select country')
    const [isOpen, setIsOpen] = useState(false)

    function handleDropdown() {
        if(isOpen)
            setIsOpen(false)
        else
            setIsOpen(true)
    }

    function handleSelectValue(country) {
        setSelectedValue(country)
        setIsOpen(false)
    }

    return (
        <div>
            <button onClick={handleDropdown}>--{selectedValue}--</button>
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