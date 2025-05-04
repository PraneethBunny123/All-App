import { useState } from "react"

export default function SearchNotes() {
    const [searchNote, setSearchNote] = useState('')

    function handleSearchNote(e) {
        setSearchNote(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleSearchNote}/>
        </div>
    )
}
