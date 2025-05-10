import { useState } from "react";

export default function Dropdown({allCategories}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsDropdownOpen(prevState => !prevState)}>Select Category</button>
            <ul>
                {isDropdownOpen &&
                    allCategories.map(question => <button key={question}>{question}</button>)
                }
            </ul>
        </div>
    )
}