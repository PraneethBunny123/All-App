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
            <div className="flex items-center justify-center space-x-6">
                <button
                    onClick={handlePrevButton}
                    disabled={currentPage === 1}
                    className={`p-3 rounded-full text-white transition ${
                        currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredQuestions.slice(startIndex, endIndex).map(question => {
                        return <Flashcard key={question.id} question={question}/>
                    })}
                </div>

                <button
                    onClick={handleNextButton}
                    disabled={currentPage === totalNumberOfPages}
                    className={`p-3 rounded-full text-white transition ${
                        currentPage === totalNumberOfPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="flex items-center space-x-4 mt-6">
                
                <span className="text-lg font-semibold text-gray-700">
                    Question {currentPage} of {totalNumberOfPages}
                </span>
            </div>
        </div>
    )
}
