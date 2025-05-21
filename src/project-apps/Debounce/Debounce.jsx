import { useEffect, useState } from "react"

export default function Debounce() {
    const [defaultInput, setDefaultInput] = useState('')
    const [debounceInput, setDebounceInput] = useState('')

    function handleOnchange(e) {
        const value = e.target.value
        setDefaultInput(e.target.value)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceInput(defaultInput)
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [defaultInput])

    return (
        <div>
            <input 
                type="text" 
                placeholder="enter text"
                onChange={handleOnchange}    
            />
            
            <div>
                <p>Default: {defaultInput}</p>
                <p>Debounce: {debounceInput}</p>
            </div>
        </div>
    )
}
