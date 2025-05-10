import { useState } from "react"

export default function Flashcard({question}) {
    const [isQuestionVisible, setIsQuestionVisible] = useState(true)

    function handleCardClick() {
        setIsQuestionVisible(prevState => !prevState)
    }

    return (
        <button 
            onClick={handleCardClick} 
            className="w-64 h-40 bg-white shadow-md rounded-2xl flex items-center justify-center text-center px-6 py-4 transition duration-300 transform hover:scale-105 hover:shadow-xl"
        >
            <p className="text-lg font-semibold text-gray-800">{isQuestionVisible ? question.question : question.answer}</p>
        </button>
    )
}
