import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export default function EditingModal({isModalOpen, setIsModalOpen, onSave, editingNote}) {
    const dialogRef = useRef()
    const [editedText, setEditedText] = useState('')

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
        if(editingNote)
            setEditedText(editingNote.Notes)
    }, [editingNote])

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
