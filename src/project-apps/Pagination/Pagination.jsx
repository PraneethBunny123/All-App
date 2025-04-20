import { useState } from "react"
import DATA from "./data"

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 5
    const totalNumberOfPages = Math.ceil(DATA.length / itemsPerPage)

    const startIndex = (currentPage-1)*itemsPerPage
    const endIndex = startIndex + itemsPerPage

    function handlePrevButton() {
        setCurrentPage(prevPage => prevPage-1)
    }
    
    function handleNextButton() {
        setCurrentPage(prevPage => prevPage+1)
    }

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
            <ul className="space-y-2 mb-4">
                {DATA.slice(startIndex, endIndex).map(data => (
                    <li 
                        key={data}
                        className="p-3 bg-gray-100 rounded hover:bg-gray-200 transition"
                    >
                        {data}
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-center gap-4">
                <button 
                    disabled={currentPage===1} 
                    onClick={handlePrevButton}
                    className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    prev
                </button>
                <button>{currentPage}</button>
                <button 
                    disabled={currentPage===totalNumberOfPages} 
                    onClick={handleNextButton}
                    className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    next
                </button>
            </div>
        </div>
    )
}