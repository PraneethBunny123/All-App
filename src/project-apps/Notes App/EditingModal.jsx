import { useRef } from "react"
import { createPortal } from "react-dom"

export default function EditingModal({isOpen, onClose, onSave, initialValue}) {
    const dialogRef = useRef()

    if(isOpen)
        dialogRef.current.showModal()

    return createPortal(
        <dialog ref={dialogRef}>
            <input type="text"/>
            <button>Save</button>
            <button>Cancel</button>
        </dialog>,
        document.getElementById('modal')
    )
}
