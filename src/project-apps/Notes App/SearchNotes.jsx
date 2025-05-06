export default function SearchNotes({searchNote, setSearchNote}) {

    function handleSearchNote(e) {
        setSearchNote(e.target.value)
    }

    return (
        <div>
            <input 
                type="text" 
                value={searchNote} 
                onChange={handleSearchNote}
                placeholder="Search notes..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    )
}
