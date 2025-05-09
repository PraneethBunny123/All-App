import { useState } from "react"

export default function Flashcard({question}) {
    const [isQuestionVisible, setIsQuestionVisible] = useState(true)

    function handleCardClick() {
        setIsQuestionVisible(prevState => !prevState)
    }

    return (
        <button onClick={handleCardClick} className="cursor-pointer w-64 h-40 bg-white shadow-xl rounded-xl flex items-center justify-center text-center p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <p className="text-lg font-medium text-gray-800">{isQuestionVisible ? question.question : question.answer}</p>
        </button>
    )
}
