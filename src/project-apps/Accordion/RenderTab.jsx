import { useState } from "react"
import TABS from "./tabData"

export default function RenderTab() {
    const [currentTabData, setCurrentTabData] = useState(null)

    function handleClick(data) {
        if(currentTabData?.id === data.id) {
            setCurrentTabData(null)
        }else
            setCurrentTabData(data)
    }

    return (
        <div>
            <ul>
                {TABS.map(data => (
                    <li key={data.label}>
                        <button onClick={() => handleClick(data)}>{data.label}</button>
                        {currentTabData?.id === data.id && <p>{data.content}</p>}
                    </li>
                ))}
            </ul>
        </div>
    )
}