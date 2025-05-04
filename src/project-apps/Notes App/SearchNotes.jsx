import { useState } from "react"

export default function SearchNotes({notes}) {
    const [searchNote, setSearchNote] = useState('')

    function handleSearchNote(e) {
        setSearchNote(e.target.value)
    }

    const searchedNotes = notes.filter(noteObj => noteObj.Notes.toLowerCase().includes(searchNote.toLowerCase()))
    console.log(searchedNotes)

    return (
        <div>
            <input type="text" onChange={handleSearchNote}/>
        </div>
    )
}
