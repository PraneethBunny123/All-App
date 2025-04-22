import { useState } from 'react'
import TOGGLE_DATA from './ToggleData'

export default function ToggleDetails() {
    const [currentId, setCurrentId] = useState(null)
    
    return (
        <div>
        <ul>
            {TOGGLE_DATA.map(data => (
                <div key={data.id}>
                    <li >{data.item}</li>
                    <button onClick={() => setCurrentId(data.id)}>Show details</button>
                    <p></p>
                </div>
            ))}
        </ul>
        </div>
    )
}