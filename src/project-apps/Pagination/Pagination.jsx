import { useState } from "react"
import DATA from "./data"

export default function Pagination() {
    const itemsPerPage = 5

    const [currentPage, setCurrentPage] = useState(1)
    console.log(currentPage)

    const totalNumberOfPages = Math.ceil(DATA.length / itemsPerPage)

    const startIndex = (currentPage-1)*itemsPerPage
    const endIndex = startIndex + itemsPerPage

    return (
        <div>
            <ul>
                {DATA.slice(startIndex, endIndex).map(data => (
                    <li key={data}>{data}</li>
                ))}
            </ul>
            <div>
                <button disabled={currentPage===1} onClick={() => setCurrentPage(prev => prev-1)}>prev</button>
                <button>{currentPage}</button>
                <button disabled={currentPage===totalNumberOfPages} onClick={() => setCurrentPage(prev => prev+1)}>next</button>
            </div>
        </div>
    )
}