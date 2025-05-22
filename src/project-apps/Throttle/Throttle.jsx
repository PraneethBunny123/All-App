import { useState } from "react"

export default function Throttle() {
    const [defaultInput, setDefaultInput] = useState('')
    const [throttleInput, setThrottleInput] = useState('')

    function handleOnchange(e) {
        setDefaultInput(e.target.value)
        
    }

    function handleThrottle(cb, delay=1000) {
        let shouldWait = false

        cb()
        shouldWait = true
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

