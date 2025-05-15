import { useState } from "react";

export default function Dropdown({allCategories, selectedCategory, setSelectedCategory}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    function handleSelectCategory(category) {
        setSelectedCategory(category)
        setIsDropdownOpen(false)
    }


    return (
        <div className="relative inline-block text-left">
            <button 
                onClick={() => setIsDropdownOpen(prevState => !prevState)}
                className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
            >
                {selectedCategory === 'All' ? 'Select Category' : selectedCategory}
                <svg className="ml-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            {isDropdownOpen &&
                <ul className="absolute z-10 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg">
                    {allCategories.map(category => 
                        <li key={category}>
                            <button
                                onClick={() => handleSelectCategory(category)} 
                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                    selectedCategory === category ? "bg-gray-100 font-semibold" : ""
                                }`}
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