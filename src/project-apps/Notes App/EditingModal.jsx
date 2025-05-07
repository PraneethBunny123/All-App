import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import TagsDropdown from "./TagsDropdown"

export default function EditingModal({isModalOpen, setIsModalOpen, onSave, editingNote, setSelectedTags, selectedTags}) {
    const dialogRef = useRef()
    const [editedText, setEditedText] = useState('')
    const [isDropdownOpenModal, setIsDropdownOpenModal] = useState(false);

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
        setSelectedTags([])
        setIsDropdownOpenModal(false)
    }

    console.log(editedText)

    return createPortal(
        <dialog ref={dialogRef} className="rounded-xl shadow-lg border w-[90%] md:w-[30rem] p-6 space-y-4 backdrop:bg-black/30">
            <h2 className="text-lg font-semibold text-gray-800">Edit Note</h2>            
            <div className="space-y-3">
                <input 
                    type="text" 
                    value={editedText} 
                    onChange={handleOnChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Edit your note..."
                />
                <TagsDropdown 
                    selectedTags={selectedTags} 
                    setSelectedTags={setSelectedTags}
                    isDropdownOpen={isDropdownOpenModal}
                    setIsDropdownOpen={setIsDropdownOpenModal}    
                />
            </div>
            <div className="flex justify-end gap-3">
                <button 
                    onClick={handleSave}
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"    
                >
                    Save
                </button>
                <button 
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
                >
                    Cancel
                </button>
            </div>
        </dialog>,
        document.getElementById('modal')
    )
}
