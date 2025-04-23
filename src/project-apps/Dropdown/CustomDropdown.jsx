import { useState } from "react"
import COUNTRIES from "./countries"

export default function CustomDropdown() {
    const [selectedValue, setSelectedValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        if(isOpen)
            setIsOpen(false)
        else
            setIsOpen(true)
    }

    return (
        <div>
            <button onClick={handleClick}>select country</button>
            {isOpen && <ul>
                {COUNTRIES.map(country => (
                    <li key={country}>{country}</li>
                ))}
            </ul>
            }
        </div>
    )
}