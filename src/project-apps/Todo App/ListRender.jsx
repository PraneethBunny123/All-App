////////////////////////////////////////////////////////////////

// seperate list render functionality with full styling 


// import DUMMY_TASKS from './tasks.js'

// export default function ListRender() {
//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//             <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Your Tasks</h2>
//                 <ul className="space-y-2">
//                     {DUMMY_TASKS.map((task, index) => (
//                         <li 
//                             key={index}
//                             className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md shadow-sm"
//                         >
//                             {task}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

////////////////////////////////////////////////////////////////

export default function ListRender({filteredData, handleDelete}) {
    return (
        <ul className="space-y-2">
            {filteredData.map((task, index) => (
                <li 
                    key={index}
                    className="flex justify-between items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-md shadow-sm"
                >
                    <span>{task}</span> 
                    <button 
                        onClick={() => handleDelete(task)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}