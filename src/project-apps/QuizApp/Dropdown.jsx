import { QUESTIONS } from "./QUESTIONS.JS";

export default function Dropdown() {

    return (
        <div>
            <button>Select Category</button>
            {QUESTIONS.map(question => 
                <button>{question.category}</button>
            )}
        </div>
    )
}