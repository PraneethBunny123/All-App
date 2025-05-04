import { useState } from "react"

export default function NotesListRender({notes, setNotes, setEditingNote}) {

    function handleRemoveNote(id) {
        const filteredNotes = notes.filter(note => note.id !== id)
        setNotes(filteredNotes)
    }

    function handleEditButton(noteObj) {
        setEditingNote(noteObj)
    }

    return (
        <ul>
            {notes.map(obj => {        
                return (
                    <li key={obj.id}>
                        {obj.Notes} - <span>{obj.timeStamp}</span>
                        <button onClick={() => handleEditButton(obj)}>✏️Edit</button>
                        <button onClick={() => handleRemoveNote(obj.id)}>❌</button>
                    </li>
                )}
            )}
        </ul>
    )
}
