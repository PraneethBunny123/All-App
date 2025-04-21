import { useState } from "react"
import { LARGE_DATA } from "./data"

export default function FullPagination() {
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 5
    const pageNumbersPerPage = 5
    const totalPages = Math.ceil(LARGE_DATA.length / itemsPerPage)

    const startIndex = (currentPage-1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const pages = Array.from({length: totalPages}, (_, i) => i+1)

    const startPage = Math.floor((currentPage-1)/pageNumbersPerPage) * pageNumbersPerPage
    const endPage = startPage + pageNumbersPerPage

    function handlePrevButton(){
        setCurrentPage(prev => prev-1)
    }

    function handleNextButton() {
        setCurrentPage(prev => prev+1)
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4 text-center">Page: {currentPage}</h1>
            <ul className="space-y-2 mb-6">
                {LARGE_DATA.slice(startIndex, endIndex).map(data => (
                    <li key={data.id} className="p-3 bg-gray-100 rounded shadow-sm">{data.name}</li>
                ))}
            </ul>
            <div className="flex justify-center items-center gap-2 flex-wrap">
                <button 
                    disabled={currentPage===1} 
                    onClick={handlePrevButton}
                    className={`px-3 py-1 rounded border ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white hover:bg-gray-100'}`}
                >   
                    prev
                </button>
                {pages.slice(startPage, endPage).map(page => 
                    <button 
                        key={page} 
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 rounded border ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'}`}
                    >
                        {page}
                    </button>
                )}
                <button 
                    disabled={currentPage===totalPages} 
                    onClick={handleNextButton}
                    className={`px-3 py-1 rounded border ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white hover:bg-gray-100'}`}
                >
                    next
                </button>
            </div>
        </div>
    )
}