import { createPortal } from "react-dom"

export default function DialogModal({children}) {
    return createPortal(
        <dialog>
            <div>
                {children}
            </div>
        </dialog>,
        document.getElementById('modal')
    )
}