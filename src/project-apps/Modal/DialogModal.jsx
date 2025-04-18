import { useRef } from "react"
import { createPortal } from "react-dom"

export default function DialogModal({children, dialogRef}) {

    return createPortal(
        <dialog ref={dialogRef}>
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}