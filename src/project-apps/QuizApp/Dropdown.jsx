import { useState } from "react";

export default function Dropdown({allCategories, selectedCategory, setSelectedCategory}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    function handleSelectCategory(category) {
        setSelectedCategory(category)
        setIsDropdownOpen(false)
    }

    return (
        <div>
            <button onClick={() => setIsDropdownOpen(prevState => !prevState)}>Select Category</button>
            {isDropdownOpen &&
                <ul>
                    {allCategories.map(category => 
                        <li key={category}>
                            <button
                                onClick={() => handleSelectCategory(category)} 
                            >
                                {category}
                            </button>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}