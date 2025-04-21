import { useState } from "react"
import { LARGE_DATA } from "./data"

export default function FullPagination() {
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 5
    const totalPages = Math.ceil(LARGE_DATA.length / itemsPerPage)

    const startIndex = (currentPage-1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    function handlePrevButton(){
        setCurrentPage(prev => prev-1)
    }

    function handleNextButton() {
        setCurrentPage(prev => prev+1)
    }


    return (
        <div>
            <ul>
                {LARGE_DATA.slice(startIndex, endIndex).map(data => (
                    <li key={data.id}>{data.name}</li>
                ))}
            </ul>
            <button onClick={handlePrevButton}>prev</button>
            <button>{currentPage}</button>
            <button>{currentPage+1}</button>
            <button>{currentPage+2}</button>
            <button>{currentPage+3}</button>
            <button>{currentPage+4}</button>
            <button onClick={handleNextButton}>next</button>
        </div>
    )
}