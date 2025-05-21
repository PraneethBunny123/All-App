import { useState } from "react"

export default function Debounce() {
    const [defaultInput, setDefaultInput] = useState('')
    const [debounceInput, setDebounceInput] = useState('')

    function handleOnchange(e) {
        setDefaultInput(e.target.value)
        updateDebounce(e.target.value)
    }

    function updateDebounce(text) {
        setDebounceInput(text)
    }

    console.log(debounceInput)

    function debounce(cb, delay=1000) {

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
