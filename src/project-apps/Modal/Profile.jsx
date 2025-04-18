import { useState } from "react";
import Modal from "./Modal";

export default function Profile() {
    const [open, setOpen] = useState(false)

    function handleViewProfile() {
        setOpen(true)
    }
    
    function handleClose() {
        setOpen(false)
    }

    return (
        <div>
            <button onClick={handleViewProfile}>View profile</button>
            <Modal open={open} handleClose={handleClose}>
                <div>
                    <h1>praneeth</h1>
                    <p>age: 24</p>
                    <p>DOB: 18 Nov 2000</p>
                </div>
            </Modal>
        </div>
    )
}