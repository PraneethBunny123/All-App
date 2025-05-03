import { useEffect, useState } from "react"
import groceries from "./MOCK_DATA"

export default function NotesApp() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes') 
        return savedNotes ? JSON.parse(savedNotes) : groceries
    })
    const [textTyped, setTextTyped] = useState('')

    let filteredNotes = []

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
    console.log(notes)
    function handleRemoveNote(id) {
        filteredNotes = notes.filter(note => note.id !== id)
        setNotes(filteredNotes)
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])


    return (
        <div>
            <input value={textTyped} onChange={handleOnChange} type="text" placeholder="Add Note..."/>
            <button onClick={handleAddNotes}>Add Note</button>

            <ul>
                {notes.map(obj => (
                    <li key={obj.id}>
                        {obj.Notes} - 
                        <button onClick={() => handleRemoveNote(obj.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}