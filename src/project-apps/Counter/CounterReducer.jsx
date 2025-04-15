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
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}