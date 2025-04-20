import TABS from "./tabData"

export default function RenderTab() {
    return (
        <div>
            <ul>
                {TABS.map(data => (
                    <li key={data.label}>
                        <button>{data.label}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}