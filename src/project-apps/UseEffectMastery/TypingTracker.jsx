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
        <div>
            <textarea value={textTyped} typeof='text' placeholder='enter some text...' onChange={handleOnChange}/>
            <p>Characters typed: {charCount}</p>
        </div>
    )
}

export default TypingTracker
