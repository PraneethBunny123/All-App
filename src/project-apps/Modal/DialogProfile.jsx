import { useRef } from "react"
import DialogModal from "./DialogModal"

const DialogProfile = () => {

    const dialogRef = useRef()

    function openModal() {
        dialogRef.current.showModal()
    }

    return (
        <div>
            <button onClick={openModal}>View profile dialog</button>
            <DialogModal dialogRef={dialogRef}>
                <div>
                    <h1>praneeth</h1>
                    <p>age: 24</p>
                    <p>DOB: 18 Nov 2000</p>
                </div>
            </DialogModal>
        </div>
    )
}

export default DialogProfile
