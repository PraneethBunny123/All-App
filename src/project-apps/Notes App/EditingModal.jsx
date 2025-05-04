import { useRef } from "react"
import { createPortal } from "react-dom"

export default function EditingModal({isModalOpen, setIsModalOpen, onSave, editingNote}) {
    const dialogRef = useRef()

    if(isModalOpen)
        dialogRef.current.showModal()

    function handleCloseModal() {
        setIsModalOpen(false)
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
