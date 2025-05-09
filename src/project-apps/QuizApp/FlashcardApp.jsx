import { QUESTIONS } from "./QUESTIONS.JS";
import Flashcard from "./Flashcard";

export default function FlashcardApp() {


    return (
        <div>
            <ul>
                {QUESTIONS.map(question => (    
                    <Flashcard key={question.id} question={question}/>
                ))}
            </ul>
        </div>
    )
}
