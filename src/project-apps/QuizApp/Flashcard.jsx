import { useState } from "react"

export default function Flashcard({question}) {
    const [isQuestionVisible, setIsQuestionVisible] = useState(true)

    function handleCardClick() {
        setIsQuestionVisible(prevState => !prevState)
    }

    return (
        <button onClick={handleCardClick}>
            {isQuestionVisible ? question.question : question.answer}
        </button>
    )
}
