import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    function handleIncrement() {
        setCount(prevCount => prevCount+1)
    }

    function handleDecrement() {
        setCount(prevCount => prevCount-1)
    }
     function handleReset() {
        setCount(0)
     }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">count: {count}</h1>
                <button 
                    onClick={handleIncrement}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mx-2"
                >
                    +
                </button>
                <button 
                    onClick={handleDecrement}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mx-2"
                >
                    -
                </button>
                <button 
                    onClick={handleReset}
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 mx-2"
                >
                    reset
                </button>
            </div>
        </div>
    )
}