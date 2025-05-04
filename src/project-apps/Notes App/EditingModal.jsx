import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export default function EditingModal({isModalOpen, setIsModalOpen, onSave, editingNote}) {
    const dialogRef = useRef()
    const [editedText, setEditedText] = useState('')

    useEffect(() => {
        if(isModalOpen) {
            dialogRef.current?.showModal()
        }else {
            dialogRef.current?.close()
        }
    }, [isModalOpen])

    useEffect(() => {
        if(editingNote)
            setEditedText(editingNote.Notes)
    }, [editingNote])

    function handleOnChange(e) {
        setEditedText(e.target.value)
    }

    function handleSave() {
        if(editedText.trim() !== '') {
            onSave(editedText)
        }
    }

    return createPortal(
        <dialog ref={dialogRef}>
            <label>Edit Note</label>
            <input type="text" value={editedText} onChange={handleOnChange}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCloseModal}>Cancel</button>
        </dialog>,
        document.getElementById('modal')
    )
}
