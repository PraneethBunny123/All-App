import { useRef, useState } from "react"

export default function Throttle() {
    const [defaultInput, setDefaultInput] = useState('')
    const [throttleInput, setThrottleInput] = useState('')

    const shouldWait = useRef(false)
    const lastValue = useRef(null)

    function handleOnchange(e) {
        setDefaultInput(e.target.value)

        handleThrottle(() => {
            setThrottleInput(e.target.value)
        }, 1000)
        
    }

    function handleThrottle(cb, delay=1000) {
        if(shouldWait.current) {
            lastValue.current = cb
            return
        }

        cb()
        shouldWait.current = true

        setTimeout(() => {
            shouldWait.current = false
            if(lastValue.current) {
                lastValue.current() 
                lastValue.current = null
                shouldWait.current = true

                setTimeout(() => {
                    shouldWait.current = false
                }, delay)
            }
        }, delay)
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
                <h2 className="text-2xl font-bold text-center text-blue-700">Throttle Demo</h2>
                <input 
                    type="text" 
                    placeholder="enter value..."
                    onChange={handleOnchange}   
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Default:</span> {defaultInput}</p>
                    <p className="text-gray-700"><span className="font-semibold">Throttle:</span> {throttleInput}</p>
                </div>
            </div>
        </div>
    )
}

