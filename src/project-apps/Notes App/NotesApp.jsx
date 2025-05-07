import { useEffect, useMemo, useState } from "react"
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

    const searchedNotes = useMemo(() => 
        notes.filter(noteObj => 
            noteObj.Notes.toLowerCase().includes(searchNote.toLowerCase())
        ), [notes, searchNote]
    ) 

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function handleSaveEditedNote(updatedText, updatedTags) {
        setNotes(prevNotes => (
            prevNotes.map(note => note.id === editingNote.id
                ? {...note, Notes: updatedText, tags: updatedTags} : note
            )
        ))

        setIsModalOpen(false)
        setEditingNote(null)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
                <h1 className="text-2xl font-semibold text-gray-800 text-center">Notes App</h1>            
                <SearchNotes 
                    searchNote={searchNote} 
                    setSearchNote={setSearchNote}
                />
                <AddNotes 
                    setNotes={setNotes}
                />
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
        </div>
    )
}