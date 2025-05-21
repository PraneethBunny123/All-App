import { useState } from "react"

export default function Debounce() {
    const [defaultInput, setDefaultInput] = useState('')
    const [debounceInput, setDebounceInput] = useState('')

    function handleOnchange(e) {
        const value = e.target.value
        setDefaultInput(e.target.value)
        debounce((value) => {
            setDebounceInput(value)
        }, 250)
    }

    console.log(debounceInput)
    

    function debounce(cb, delay=1000) {
        let timeout;

        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                cb(...args)
            }, delay)
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="enter text"
                onChange={handleOnchange}    
            />
            
            <div>
                <p>Default: {defaultInput}</p>
                <p>Debounce: {}</p>
            </div>
        </div>
    )
}
