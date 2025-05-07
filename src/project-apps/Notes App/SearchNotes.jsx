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
                placeholder="🔍Search notes..."
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />
        </div>
    )
}
