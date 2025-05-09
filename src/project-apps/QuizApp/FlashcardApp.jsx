import { useState } from "react";
import { QUESTIONS } from "./QUESTIONS.JS";

export default function FlashcardApp() {
    const [isQuestionVisible, setIsQuestionVisible] = useState(true)

    function handleCardClick() {

    }

    return (
        <div>
            <ul>
                {QUESTIONS.map(question => (
                    <button key={question.id} onClick={handleCardClick}>
                        {isQuestionVisible ? question.question : question.answer}
                    </button>
                ))}
            </ul>
        </div>
    )
}
