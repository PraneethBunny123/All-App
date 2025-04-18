export default function SearchBar({ handleChange, handleFetch, city, isLoading }) {
    function handleEnterKey(e) {
        if(e.key === 'Enter') handleFetch()
    }
    console.log(isLoading);
    

    return (
        <div className="flex gap-2 mb-6 items-center justify-center">
            <input 
                placeholder="Enter city"
                type="text"
                onChange={handleChange}
                onKeyDown={handleEnterKey}
                value={city}
                className="px-4 py-2 rounded-lg bg-white text-gray-800 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
            />
            <button 
                onClick={handleFetch}
                disabled={isLoading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Get Weather
            </button>
        </div>
    )
}
