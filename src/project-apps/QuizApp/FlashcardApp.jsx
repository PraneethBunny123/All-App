import { QUESTIONS } from "./QUESTIONS.JS";
import Flashcard from "./Flashcard";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function FlashcardApp() {
    const [categories, setCategories] = useState([])

    const all = new Set(QUESTIONS.map(question => question.category))
    console.log(categories)



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Dropdown />
                {QUESTIONS.map(question => {
                    return <Flashcard key={question.id} question={question}/>
                })}
            </div>
        </div>
    )
}
