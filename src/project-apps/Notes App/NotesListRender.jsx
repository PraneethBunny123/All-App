import { useState } from "react"

export default function NotesListRender({notes, setNotes}) {
    const [editingNoteId, setEditingNoteId] = useState(null)

    function handleRemoveNote(id) {
        const filteredNotes = notes.filter(note => note.id !== id)
        setNotes(filteredNotes)
    }

    function handleEditButton(id) {
        setEditingNoteId(id)
    }

    return (
        <ul>
            {notes.map(obj => {        
                return (
                    <li key={obj.id}>
                        {obj.Notes} - <span>{obj.timeStamp}</span>
                        <button onClick={() => handleEditButton(obj.id)}>✏️Edit</button>
                        <button onClick={() => handleRemoveNote(obj.id)}>❌</button>
                    </li>
                )}
            )}
        </ul>
    )
}
