import groceries from "./MOCK_DATA"

export default function NotesApp() {
    return (
        <div>
            <input type="text" placeholder="Add Note..."/>
            <button>Add Note</button>

            <ul>
                {groceries.map(obj => (
                    <li key={obj.id}>{obj.Notes}</li>
                ))}
            </ul>
        </div>
    )
}