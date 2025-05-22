import { useState } from "react"

export default function Throttle() {
    const [defaultInput, setDefaultInput] = useState('')

    function handleOnchange(e) {
        setDefaultInput(e.target.value)
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="enter value..."
                onChange={handleOnchange}    
            />
            <p>Default: {defaultInput}</p>
            <p>Throttle: {}</p>
        </div>
    )
}
