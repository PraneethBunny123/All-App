import { useEffect, useState } from "react"
import groceries from "./MOCK_DATA"
import NotesListRender from "./NotesListRender"
import AddNotes from "./AddNotes"

export default function NotesApp() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes') 
        return savedNotes ? JSON.parse(savedNotes) : groceries
    })

    
    function handleRemoveNote(id) {
        const filteredNotes = notes.filter(note => note.id !== id)
        setNotes(filteredNotes)
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])


    return (
        <div>
            <AddNotes setNotes={setNotes}/>
            <NotesListRender handleRemoveNote={handleRemoveNote} notes={notes}/>
        </div>
    )
}