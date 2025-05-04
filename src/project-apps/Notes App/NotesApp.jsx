import { useEffect, useState } from "react"
import groceries from "./MOCK_DATA"
import NotesListRender from "./NotesListRender"
import AddNotes from "./AddNotes"
import EditingModal from "./EditingModal"
import SearchNotes from "./SearchNotes"

export default function NotesApp() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes') 
        return savedNotes ? JSON.parse(savedNotes) : groceries
    })

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingNote, setEditingNote] = useState(null)

    const [searchNote, setSearchNote] = useState('')

    const searchedNotes = notes.filter(noteObj => noteObj.Notes.toLowerCase().includes(searchNote.toLowerCase()))

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function handleSaveEditedNote(updatedText) {
        setNotes(prevNotes => (
            prevNotes.map(note => note.id === editingNote.id
                ? {...note, Notes: updatedText} : note
            )
        ))

        setIsModalOpen(false)
        setEditingNote(null)
    }


    return (
        <div>
            <label>Notes App</label>
            <SearchNotes searchNote={searchNote} setSearchNote={setSearchNote}/>
            <AddNotes setNotes={setNotes}/>
            <NotesListRender 
                notes={notes} 
                setNotes={setNotes} 
                setEditingNote={setEditingNote}
                setIsModalOpen={setIsModalOpen}    
                searchedNotes={searchedNotes}
            />
            <EditingModal 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen}
                editingNote={editingNote}   
                onSave={handleSaveEditedNote} 
            />
        </div>
    )
}