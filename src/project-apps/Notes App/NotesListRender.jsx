export default function NotesListRender({notes, setNotes}) {

    function handleRemoveNote(id) {
        const filteredNotes = notes.filter(note => note.id !== id)
        setNotes(filteredNotes)
    }

    return (
        <ul>
            {notes.map(obj => {
                console.log(obj.id)
        
                return (
                    <li key={obj.id}>
                        {obj.Notes} - <span>{obj.timeStamp}</span>
                        <button>✏️Edit</button>
                        <button onClick={() => handleRemoveNote(obj.id)}>❌</button>
                    </li>
                )}
            )}
        </ul>
    )
}
