import { useState } from "react";
import { QUESTIONS } from "./QUESTIONS.JS";

export default function Dropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsDropdownOpen(prevState => !prevState)}>Select Category</button>
            <ul>
                {isDropdownOpen &&
                    QUESTIONS.map(question => 
                        <button key={question.id}>{question.category}</button>
                    )
                }
            </ul>
        </div>
    )
}