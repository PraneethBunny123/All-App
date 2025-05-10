import { QUESTIONS } from "./QUESTIONS.JS";
import Flashcard from "./Flashcard";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function FlashcardApp() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    
    const allCategories = ['All', ...new Set(QUESTIONS.map(q => q.category))]

    const filteredQuestions = selectedCategory === 'All' ? QUESTIONS : QUESTIONS.filter(question => question.category === selectedCategory)



    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center space-y-10">
            <Dropdown 
                allCategories={allCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}    
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredQuestions.map(question => {
                    return <Flashcard key={question.id} question={question}/>
                })}
            </div>
        </div>
    )
}
