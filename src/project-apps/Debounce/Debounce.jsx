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
            
            <div className="space-y-2">
                <p className="text-gray-700 font-medium">Default: <span className="font-normal">{defaultInput}</span></p>
                <p className="text-gray-700 font-medium">Debounce: <span className="font-normal">{debounceInput}</span></p>
            </div>
        </div>
    )
}
