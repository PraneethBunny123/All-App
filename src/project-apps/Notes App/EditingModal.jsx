import { useRef } from "react"
import { createPortal } from "react-dom"

export default function EditingModal() {
    const dialogRef = useRef()

    dialogRef.current.showModal()

    return createPortal(
        <dialog ref={dialogRef}>
            <input type="text"/>
            <button>Save</button>
        </dialog>,
        document.getElementById('modal')
    )
}
