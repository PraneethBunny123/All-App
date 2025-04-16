import DUMMY_TASKS from './tasks.js'

export default function ListRender() {
    return (
        <div>
            <ul>
                {DUMMY_TASKS.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}