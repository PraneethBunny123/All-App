export default function SearchBar({handleChange, handleFetch, city}) {
    return (
        <div className="flex gap-2 mb-6">
            <input 
                placeholder="Enter city"
                type="text"
                onChange={handleChange}
                value={city}
                className="px-4 py-2 rounded-lg shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button 
                onClick={handleFetch}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
                get weather
            </button>
        </div>
    )
}