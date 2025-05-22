import { useRef, useState } from "react"

export default function Throttle() {
    const [defaultInput, setDefaultInput] = useState('')
    const [throttleInput, setThrottleInput] = useState('')

    const shouldWait = useRef(false)

    function handleOnchange(e) {
        setDefaultInput(e.target.value)

        handleThrottle(() => {
            setThrottleInput(e.target.value)
        }, 1000)
        
    }

    function handleThrottle(cb, delay=1000) {
        if(shouldWait.current) return

        cb()
        shouldWait.current = true

        setTimeout(() => {
            shouldWait.current = false
        }, delay)
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

