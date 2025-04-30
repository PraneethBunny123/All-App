import React, { useState } from 'react'

const TypingTracker = () => {
    const [textTyped, setTextTyped] = useState('')

    console.log(textTyped, textTyped.length)

    return (
        <div>
            <textarea value={textTyped} typeof='text' onChange={(e) => setTextTyped(e.target.value)}/>
            <button></button>
        </div>
    )
}

export default TypingTracker
