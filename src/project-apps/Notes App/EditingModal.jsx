import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export default function EditingModal({isModalOpen, setIsModalOpen, onSave, editingNote}) {
    const dialogRef = useRef()
    const [editedText, setEditedText] = useState(editingNote?.Notes)

    useEffect(() => {
        if(isModalOpen) dialogRef.current.showModal()
    }, [isModalOpen])

    function handleCloseModal() {
        setIsModalOpen(false)
    }

    function handleOnChange(e) {
        setEditedText(e.target.value)
    }

    useEffect(() => {
        setEditedText(editingNote?.Notes)
    }, [])

    console.log(isModalOpen)

    return createPortal(
        <dialog ref={dialogRef}>
            <label>Edit Note</label>
            <input type="text" value={editedText} onChange={handleOnChange}/>
            <button>Save</button>
            <button onClick={handleCloseModal}>Cancel</button>
        </dialog>,
        document.getElementById('modal')
    )
}
