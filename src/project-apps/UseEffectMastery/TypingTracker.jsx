import React, { useEffect, useState } from 'react'

const TypingTracker = () => {
    const [textTyped, setTextTyped] = useState('')
    const [charCount, setCharCount] = useState(0)

    useEffect(() => {
        localStorage.setItem('textCount', textTyped.trim().length)
    }, [textTyped])

    useEffect(() => {
        const count = localStorage.getItem('textCount')

        if(count) {
            setCharCount(count)
        }
    }, [])

    return (
        <div>
            <textarea value={textTyped} typeof='text' placeholder='enter some text...' onChange={(e) => setTextTyped(e.target.value)}/>
            <p>Characters typed: {textTyped.trim().length}</p>
        </div>
    )
}

export default TypingTracker
