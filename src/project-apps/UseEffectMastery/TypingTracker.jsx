import React, { useEffect, useState } from 'react'

const TypingTracker = () => {
    const [textTyped, setTextTyped] = useState('')

    useEffect(() => {
        localStorage.setItem('textCount', textTyped.trim().length)
    }, [textTyped])

    const newCount = localStorage.getItem('textCount')

    console.log(newCount)

    return (
        <div>
            <textarea value={textTyped} typeof='text' placeholder='enter some text...' onChange={(e) => setTextTyped(e.target.value)}/>
            <p>Characters typed: {textTyped.trim().length}</p>
        </div>
    )
}

export default TypingTracker
