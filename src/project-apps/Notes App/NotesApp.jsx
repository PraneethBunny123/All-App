import { useEffect, useState } from "react"
import groceries from "./MOCK_DATA"
import NotesListRender from "./NotesListRender"
import AddNotes from "./AddNotes"
import EditingModal from "./EditingModal"

export default function NotesApp() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes') 
        return savedNotes ? JSON.parse(savedNotes) : groceries
    })

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingNote, setEditingNote] = useState(null)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])


    return (
        <div>
            <AddNotes setNotes={setNotes}/>
            <NotesListRender 
                notes={notes} 
                setNotes={setNotes} 
                setEditingNote={setEditingNote}
                setIsModalOpen={setIsModalOpen}    
            />
            <EditingModal 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen}
                editingNote={editingNote}    
            />
        </div>
    )
}