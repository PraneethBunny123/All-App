export default function SearchBar({handleChange, handleFetch}) {
    return (
        <div>
            <input 
                placeholder="enter city"
                type="text"
                onChange={handleChange}
            />
            <button onClick={handleFetch}>get weather</button>
        </div>
    )
}