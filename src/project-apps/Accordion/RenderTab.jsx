import { useState } from "react"
import TABS from "./tabData"

export default function RenderTab() {
    const [currentTabData, setCurrentTabData] = useState(null)

    function handleClick(data) {
        setCurrentTabData(data)
    }

    console.log(currentTabData)

    return (
        <div>
            <ul>
                {TABS.map(data => (
                    <li key={data.label}>
                        <button onClick={() => handleClick(data)}>{data.label}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}