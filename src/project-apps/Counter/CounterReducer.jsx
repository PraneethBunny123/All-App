import { useReducer } from "react"

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT': 
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        case 'RESET':
            return {count: 0}
        default:
            return state
    }
}

export default function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    function handleIncrement() {
        dispatch({type: 'INCREMENT'})
    }

    function handleDecrement() {
        dispatch({type: 'DECREMENT'})
    }

    function handleReset() {
        dispatch({type: 'RESET'})
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold text-stone-700 mb-4">Counter using useReducer</h1>
                <h3 className="text-4xl font-semibold text-gray-800 mb-6">{state.count}</h3>
                <div className="space-x-4">
                    <button 
                        onClick={handleIncrement} 
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                        +
                    </button>
                    <button 
                        onClick={handleDecrement}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                        -
                    </button>
                    <button 
                        onClick={handleReset}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"   
                    >
                        Reset
                    </button>    
                </div>
            </div>
        </div>
    )
}