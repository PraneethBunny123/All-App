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

    function handleButtonOne() {
        setCurrentPage(1)
    }

    function handleButtonTwo() {
        setCurrentPage(2)
    }

    function handleButtonThree() {
        setCurrentPage(3)
    }

    function handleButtonFour() {
        setCurrentPage(4)
    }    

    function handleButtonFive() {
        setCurrentPage(5)
    }

    return (
        <div>
            <h1>Page: {currentPage}</h1>
            <ul>
                {LARGE_DATA.slice(startIndex, endIndex).map(data => (
                    <li key={data.id}>{data.name}</li>
                ))}
            </ul>
            <button disabled={currentPage===1} onClick={handlePrevButton}>prev</button>
            <button onClick={handleButtonOne}>{currentPage}</button>
            <button onClick={handleButtonTwo}>{currentPage+1}</button>
            <button onClick={handleButtonThree}>{currentPage+2}</button>
            <button onClick={handleButtonFour}>{currentPage+3}</button>
            <button onClick={handleButtonFive}>{currentPage+4}</button>
            <button disabled={currentPage===totalPages} onClick={handleNextButton}>next</button>
        </div>
    )
}