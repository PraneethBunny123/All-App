import { QUESTIONS } from "./QUESTIONS.JS";
import Flashcard from "./Flashcard";

export default function FlashcardApp() {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {QUESTIONS.map(question => (    
                    <Flashcard key={question.id} question={question}/>
                ))}
            </div>
        </div>
    )
}
