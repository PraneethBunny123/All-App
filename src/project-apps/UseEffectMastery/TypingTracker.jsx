import React, { useEffect, useState } from 'react'

const TypingTracker = () => {
    const [textTyped, setTextTyped] = useState(() => localStorage.getItem('textTyped') || '')
    const [charCount, setCharCount] = useState(() => parseInt(localStorage.getItem('textCount')) || 0)

    useEffect(() => {
        localStorage.setItem('textCount', charCount)
        localStorage.setItem('textTyped', textTyped)
    }, [textTyped, charCount])


    function handleOnChange(e) {
        const newText = e.target.value
        setTextTyped(newText)
        setCharCount(newText.trim().length)
    } 

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Typing Tracker</h2>
                <textarea
                    value={textTyped}
                    placeholder="Enter some text..."
                    onChange={handleOnChange}
                    className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-3 text-gray-600">Characters typed: <span className="font-semibold">{charCount}</span></p>
            </div>
        </div>
    )
}

export default TypingTracker
