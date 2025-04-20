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
        <div className="max-w-xl mx-auto mt-10">
            <ul className="space-y-4">
                {FAQ_DATA.map((data, index) => (
                    <li 
                        key={index} 
                        className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
                    >
                        <button 
                            onClick={() => handleClick(data)}
                            className="w-full text-left text-lg font-semibold flex justify-between items-center"
                        >
                            {data.question}
                            <span className="text-xl">
                                {currentData?.id === data.id ? "−" : "+"}
                            </span>
                        </button>
                        {currentData?.id === data.id && 
                            <p className="mt-2 text-gray-700 text-sm transition-all duration-300 ease-in">{data.answer}</p>
                        }
                    </li>   
                ))}
            </ul>
        </div>
    )
}