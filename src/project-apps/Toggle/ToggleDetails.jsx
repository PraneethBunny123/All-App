import { useState } from 'react'
import TOGGLE_DATA from './ToggleData'

export default function ToggleDetails() {
    const [currentId, setCurrentId] = useState(null)

    function handleClick(id) {
        if(currentId)
            setCurrentId(null)
        else
            setCurrentId(id)
    }
    
    return (
        <div>
        <ul>
            {TOGGLE_DATA.map(data => (
                <div key={data.id}>
                    <li >{data.item}</li>
                    <button onClick={() => handleClick(data.id)}>Show details</button>
                    <p>{data.id === currentId && data.description}</p>
                </div>
            ))}
        </ul>
        </div>
    )
}