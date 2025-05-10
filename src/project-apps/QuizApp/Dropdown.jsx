import { useState } from "react";
import { QUESTIONS } from "./QUESTIONS.JS";

export default function Dropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <div>
            <button>Select Category</button>
            {isDropdownOpen &&
                QUESTIONS.map(question => 
                    <button key={question.id}>{question.category}</button>
                )
            }
        </div>
    )
}