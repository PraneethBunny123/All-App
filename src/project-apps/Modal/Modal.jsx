import { createPortal } from "react-dom";

export default function Modal({children, open, ...props}) {

    if(!open) return null

    return createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 shadow-lg relative">
            {children}
            <button 
                {...props}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >✖</button>
        </div>
        </div>,
        document.getElementById('modal')
    )
}