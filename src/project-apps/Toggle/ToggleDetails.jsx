import { useState } from 'react'
import TOGGLE_DATA from './ToggleData'

export default function ToggleDetails() {
    const [currentId, setCurrentId] = useState([])

    function handleClick(id) {
        if(currentId.includes(id))
            setCurrentId(prevState => prevState.filter(arrayId => arrayId !== id))
        else
            setCurrentId(prevState => [...prevState, id])
    }
    

    return (
        <div className="max-w-xl mx-auto mt-8 p-4 border rounded-lg shadow-sm bg-white">
        <ul className="space-y-4">
            {TOGGLE_DATA.map(data => (
                <li key={data.id} className="p-4 border rounded-md shadow-sm bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-lg">{data.item}</span>
                    <button 
                        onClick={() => handleClick(data.id)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                        {currentId.includes(data.id) ?  'Hide Details' : 'Show Details'}
                    </button>
                    {currentId.includes(data.id) && (
                        <p className="text-gray-700 text-sm">{data.description}</p>
                    )}
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}