export default function SearchBar({ handleChange, handleFetch, city }) {
    // function handleEnterKey(e) {
    //     if(e.key === 'Enter') handleFetch()
    // }

    return (
        <div className="flex gap-2 mb-6 items-center justify-center">
            <input 
                placeholder="Enter city"
                type="text"
                onChange={handleChange}
                onKeyDown={(e) => { if(e.key === 'Enter') handleFetch() }}
                value={city}
                className="px-4 py-2 rounded-lg bg-white text-gray-800 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
            />
            <button 
                onClick={handleFetch}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:brightness-110 transition"
            >
                Get Weather
            </button>
        </div>
    )
}
