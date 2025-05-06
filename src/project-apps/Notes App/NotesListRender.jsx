export default function NotesListRender({notes, setNotes, setEditingNote, setIsModalOpen, searchedNotes}) {

    function handleRemoveNote(id) {
        const filteredNotes = notes.filter(note => note.id !== id)
        setNotes(filteredNotes)
    }

    function handleEditButton(noteObj) {
        setEditingNote(noteObj)
        setIsModalOpen(true)
    }

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {searchedNotes.map(obj => {        
                return (
                    <li key={obj.id} className="bg-white p-4 rounded-lg shadow border flex flex-col justify-between">
                        <div className="mb-2 text-gray-800 font-medium">{obj.Notes}</div>
                        <div>
                            {obj.tags.map(tag => (
                                <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <span>{obj.timeStamp}</span>
                        <button onClick={() => handleEditButton(obj)}>✏️Edit</button>
                        <button onClick={() => handleRemoveNote(obj.id)}>❌</button>
                    </li>
                )}
            )}
        </ul>
    )
}
