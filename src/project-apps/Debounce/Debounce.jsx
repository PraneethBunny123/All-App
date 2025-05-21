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
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
                <input 
                    type="text" 
                    placeholder="enter text"
                    onChange={handleOnchange}    
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <div className="space-y-2">
                    <p className="text-gray-700 font-medium">Default: <span className="font-normal">{defaultInput}</span></p>
                    <p className="text-gray-700 font-medium">Debounce: <span className="font-normal">{debounceInput}</span></p>
                </div>
            </div>
        </div>
    )
}
