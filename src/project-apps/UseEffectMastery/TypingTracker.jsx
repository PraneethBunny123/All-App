import React, { useEffect, useState } from 'react'

const TypingTracker = () => {
    const [textTyped, setTextTyped] = useState('')
    const [charCount, setCharCount] = useState(0)

    useEffect(() => {
        localStorage.setItem('textCount', textTyped.trim().length)
    }, [textTyped])

    useEffect(() => {
        const savedText = localStorage.getItem('textCount') || ''

        setTextTyped(savedCount)
    }, [])

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
