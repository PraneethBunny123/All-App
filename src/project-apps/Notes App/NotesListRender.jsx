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
                    <li key={obj.id} className="bg-white p-5 rounded-2xl shadow-md border hover:shadow-lg transition flex flex-col justify-between space-y-2">
                        <div className="text-gray-800 font-medium text-base">{obj.Notes}</div>
                        <div className="flex flex-wrap gap-2">
                            {obj.tags.map(tag => (
                                <span key={tag} className="bg-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <div className="text-xs text-gray-500 mb-3">{obj.timeStamp}</div>
                        <div className="flex justify-end gap-2">
                            <button 
                                onClick={() => handleEditButton(obj)}
                                className="px-3 py-1 text-sm bg-yellow-200 hover:bg-yellow-300 rounded"
                            >
                                ✏️Edit
                            </button>
                            <button 
                                onClick={() => handleRemoveNote(obj.id)}
                                className="px-3 py-1 text-sm bg-red-200 hover:bg-red-300 rounded"
                            >
                                ❌Delete
                            </button>
                        </div>
                    </li>
                )}
            )}
        </ul>
    )
}
