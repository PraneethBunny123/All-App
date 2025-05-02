import { useState } from "react"
import groceries from "./MOCK_DATA"

export default function NotesApp() {
    const [notes, setNotes] = useState(() => localStorage.getItem('notes') || groceries)
    const [textTyped, setTextTyped] = useState('')

    let filteredNotes = []

    function handleOnChange(e) {
        setTextTyped(e.target.value)
    }

    function handleAddNotes() {
        if(textTyped.trim() !== '') {
            setNotes(prevNotes => [...prevNotes, {
                "id": prevNotes.length + 1,
                "Notes": textTyped
            }])
            setTextTyped('')
        }
    }

    function handleRemoveNote(id) {
        filteredNotes = notes.filter(note => note.id !== id)
        setNotes(filteredNotes)
    }



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