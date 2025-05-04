import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

export default function AddNotes({setNotes}) {
    const [textTyped, setTextTyped] = useState('')


    function handleOnChange(e) {
        setTextTyped(e.target.value)
    }

    function handleAddNotes() {
        const now = new Date()
        const timeStamp = now.toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        })
        
        if(textTyped.trim() !== '') {
            setNotes(prevNotes => [...prevNotes, {
                id: uuidv4(),
                Notes: textTyped,
            }])
            setTextTyped('')
        }
        
    }

    return (
        <div>
            <input value={textTyped} onChange={handleOnChange} type="text" placeholder="Add Note..."/>
            <button onClick={handleAddNotes}>Add Note</button>
        </div>

    )
}
