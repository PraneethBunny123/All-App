import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import TagsDropdown from "./TagsDropdown"

export default function EditingModal({isModalOpen, setIsModalOpen, onSave, editingNote, setSelectedTags}) {
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

    function handleCloseModal() {
        setIsModalOpen(false)
    }

    function handleSave() {
        if(editedText.trim() !== '') {
            onSave(editedText)
        }
    }

    return createPortal(
        <dialog ref={dialogRef} className="rounded-xl shadow-lg border w-[90%] md:w-[30rem] p-6 space-y-4 backdrop:bg-black/30">
            <h2 className="text-lg font-semibold text-gray-800">Edit Note</h2>            
            <div>
                <input 
                    type="text" 
                    value={editedText} 
                    onChange={handleOnChange}/
                    
                >
                <TagsDropdown setSelectedTags={setSelectedTags}/>
            </div>
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCloseModal}>Cancel</button>
            </div>
        </dialog>,
        document.getElementById('modal')
    )
}
