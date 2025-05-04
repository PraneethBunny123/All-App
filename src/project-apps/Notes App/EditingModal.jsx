import { useRef } from "react"
import { createPortal } from "react-dom"

export default function EditingModal({isModalOpen, setisModalOpen, onSave, editingNote}) {
    const dialogRef = useRef()

    if(isModalOpen)
        dialogRef.current.showModal()

    function handleCloseModal() {
        setisModalOpen(false)
    }

    console.log(isModalOpen)

    return createPortal(
        <dialog ref={dialogRef}>
            <label>Edit Note</label>
            <input type="text" value={editingNote?.Notes}/>
            <button>Save</button>
            <button onClick={handleCloseModal}>Cancel</button>
        </dialog>,
        document.getElementById('modal')
    )
}
