export default function SearchBar({handleChange, handleFetch, city}) {
    return (
        <div>
            <input 
                placeholder="enter city"
                type="text"
                onChange={handleChange}
                value={city}
            />
            <button onClick={handleFetch}>get weather</button>
        </div>
    )
}