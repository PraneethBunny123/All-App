export default function NotesListRender({notes, handleRemoveNote}) {
    
    return (
        <ul>
            {notes.map(obj => (
                <li key={obj.id}>
                    {obj.Notes} - <span>{obj.timeStamp}</span>
                    <button>✏️Edit</button>
                    <button onClick={() => handleRemoveNote(obj.id)}>❌</button>
                </li>
            ))}
        </ul>
    )
}
