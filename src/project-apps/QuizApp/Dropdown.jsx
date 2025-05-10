import { useState } from "react";

export default function Dropdown({allCategories, selectedCategory, setSelectedCategory}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    function handleSelectCategory(category) {
        setSelectedCategory(category)
    }

    return (
        <div>
            <button onClick={() => setIsDropdownOpen(prevState => !prevState)}>Select Category</button>
            {isDropdownOpen &&
                <ul>
                    {allCategories.map(category => 
                        <button key={category} onClick={() => handleSelectCategory(category)}>{category}</button>
                    )}
                </ul>
            }
        </div>
    )
}