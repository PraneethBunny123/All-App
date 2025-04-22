import TOGGLE_DATA from './ToggleData'

export default function ToggleDetails() {
    return (
        <div>
        <ul>
            {TOGGLE_DATA.map(data => (
                <li key={data.item}>{data.item}</li>
            ))}
        </ul>
        </div>
    )
}