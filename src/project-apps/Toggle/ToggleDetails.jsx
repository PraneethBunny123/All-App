import TOGGLE_DATA from './ToggleData'

export default function ToggleDetails() {
    return (
        <div>
        <ul>
            {TOGGLE_DATA.map(data => (
                <div key={data.id}>
                    <li >{data.item}</li>
                    <button>Show details</button>
                </div>
            ))}
        </ul>
        </div>
    )
}