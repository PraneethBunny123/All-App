import { QUESTIONS } from "./QUESTIONS.JS";
import Flashcard from "./Flashcard";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

export default function FlashcardApp() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const [currentPage, setCurrentPage] = useState(1)
    
    const allCategories = ['All', ...new Set(QUESTIONS.map(q => q.category))]

    const filteredQuestions = selectedCategory === 'All' ? QUESTIONS : QUESTIONS.filter(question => question.category === selectedCategory)

    const cardsPerPage = 1
    const totalNumberOfPages = Math.ceil(filteredQuestions.length/cardsPerPage)

    const startIndex = (currentPage-1)*cardsPerPage
    const endIndex = startIndex + cardsPerPage

    function handlePrevButton() {
        setCurrentPage(prevPage => prevPage-1)
    }

    function handleNextButton() {
        setCurrentPage(prevPage => prevPage+1)
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedCategory])

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center space-y-10">
            <Dropdown 
                allCategories={allCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}    
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredQuestions.slice(startIndex, endIndex).map(question => {
                    return <Flashcard key={question.id} question={question}/>
                })}
            </div>
            <div className="flex items-center space-x-4 mt-6">
                <button 
                    onClick={handlePrevButton}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md text-white font-medium transition duration-200 ${
                        currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    prev
                </button>
                <span className="text-lg font-semibold text-gray-700">
                    Question {currentPage} of {totalNumberOfPages}
                </span>

                <button 
                    onClick={handleNextButton}
                    disabled={currentPage === totalNumberOfPages}
                >
                    next
                </button>
            </div>
        </div>
    )
}
