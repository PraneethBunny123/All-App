import { useState } from "react"

export default function Debounce() {
    const [input, setInput] = useState('')

    function handleOnchange(e) {
        setInput(e.target.value)
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="enter text"
                value={input}
                onChange={handleOnchange}    
            />
            
            <div>
                <p>Default: {input}</p>
                <p>Debounce: {input}</p>
            </div>
        </div>
    )
}
