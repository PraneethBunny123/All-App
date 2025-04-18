import { useRef } from "react"
import DialogModal from "./DialogModal"

const DialogProfile = () => {

    const dialogRef = useRef()

    function handleOpenModal() {
        dialogRef.current.showModal()
    }

    function handleCloseModal() {
        dialogRef.current.closeModal()
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <button 
                onClick={handleOpenModal}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"    
            >
                View profile dialog
            </button>
            <DialogModal dialogRef={dialogRef}>
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-semibold text-gray-800">praneeth</h1>
                    <p className="text-gray-600">age: 24</p>
                    <p className="text-gray-600">DOB: 18 Nov 2000</p>
                </div>
            </DialogModal>
        </div>
    )
}

export default DialogProfile
