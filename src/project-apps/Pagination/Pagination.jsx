import DATA from "./data"

export default function Pagination() {
    return (
        <div>
            <ul>
                {DATA.map(data => (
                    <li key={data}>{data}</li>
                ))}
            </ul>
        </div>
    )
}