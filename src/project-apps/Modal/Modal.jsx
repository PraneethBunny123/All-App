import { createPortal } from "react-dom";

export default function Modal({children, open, handleClose}) {

    if(!open) return null

    return createPortal(
        <div>
            {children}
            <button onClick={handleClose}>close</button>
        </div>,
        document.getElementById('modal')
    )
}