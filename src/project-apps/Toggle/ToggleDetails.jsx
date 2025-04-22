import { useState } from 'react'
import TOGGLE_DATA from './ToggleData'

export default function ToggleDetails() {
    const [currentId, setCurrentId] = useState([])

    function handleClick(id) {
        if(currentId.includes(id))
            setCurrentId(prevState => prevState.filter(arrayId => arrayId !== id))
        else
            setCurrentId(prevStata => [...prevStata, id])
    }
    
    console.log(currentId)

    return (
        <div>
        <ul>
            {TOGGLE_DATA.map(data => (
                <div key={data.id}>
                    <li >{data.item}</li>
                    <button onClick={() => handleClick(data.id)}>Show details</button>
                    <p>{(currentId.includes(data.id)) && data.description}</p>
                </div>
            ))}
        </ul>
        </div>
    )
}