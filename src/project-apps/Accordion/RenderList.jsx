import { useState } from "react"
import FAQ_DATA from "./faqData"

export default function RenderList() {
    const [currentData, setCurrentData] = useState(null) 

    function handleClick(data) {
        if(currentData?.id === data.id) 
            setCurrentData(null)
        else
            setCurrentData(data)
    }
    
    return (
        <div>
            <ul>
                {FAQ_DATA.map((data, index) => (
                    <li key={index}>
                        <button onClick={() => handleClick(data)}>{data.question}</button>
                        {currentData?.id === data.id && <p>{data.answer}</p>}
                    </li>   
                ))}
            </ul>
        </div>
    )
}