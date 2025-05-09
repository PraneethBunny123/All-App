import { QUESTIONS } from "./QUESTIONS.JS";

export default function FlashcardApp() {
    return (
        <div>
            <ul>
                {QUESTIONS.map(question => (
                    <button key={question.id}>
                        {question.question}
                    </button>
                ))}
            </ul>
        </div>
    )
}
