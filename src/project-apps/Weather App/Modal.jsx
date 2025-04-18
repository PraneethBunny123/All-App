import { createPortal } from "react-dom"

export default function Modal({children}) {

    return createPortal(
        <div>
            {children}
        </div>,
        document.getElementById('modal')
    )
}
