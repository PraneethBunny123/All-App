export default function SearchNotes({searchNote, setSearchNote}) {

    function handleSearchNote(e) {
        setSearchNote(e.target.value)
    }

    return (
        <div>
            <input type="text" value={searchNote} onChange={handleSearchNote}/>
        </div>
    )
}
