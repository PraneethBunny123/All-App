import { useState } from "react"

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
                id: prevNotes.length + 1,
                Notes: textTyped,
                timeStamp: timeStamp
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
