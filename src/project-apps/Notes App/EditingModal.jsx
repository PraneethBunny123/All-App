import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import TagsDropdown from "./TagsDropdown"

export default function EditingModal({isModalOpen, setIsModalOpen, onSave, editingNote}) {
    const dialogRef = useRef()
    const [editedText, setEditedText] = useState('')

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedTags, setSelectedTags] = useState([])

    useEffect(() => {
        if(isModalOpen) {
            dialogRef.current?.showModal()
        }else {
            dialogRef.current?.close()
        }
    }, [isModalOpen])

    useEffect(() => {
        if(editingNote){
            setEditedText(editingNote.Notes)
            setSelectedTags(editingNote.tags || [])
        }
    }, [editingNote])

    function handleOnChange(e) {
        setEditedText(e.target.value)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
        setIsDropdownOpen(false)
    }

    function handleSave() {
        if(editedText.trim() !== '') {
            onSave(editedText, selectedTags)
            setIsDropdownOpen(false)
        }
        setSelectedTags([])
    }

    return createPortal(
        <dialog ref={dialogRef} className="rounded-xl shadow-lg border w-[90%] md:w-[30rem] p-6 space-y-4 backdrop:bg-black/30">
            <h2 className="text-xl font-bold text-gray-800">Edit Note</h2>            
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
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}    
                />
            </div>
            <div className="flex justify-end gap-2">
                <button 
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded-xl"    
                >
                    Save
                </button>
                <button 
                    onClick={handleCloseModal}
                    className="bg-gray-200 px-4 py-2 rounded-xl"
                >
                    Cancel
                </button>
            </div>
        </dialog>,
        document.getElementById('modal')
    )
}
