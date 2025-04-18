import DialogModal from "./DialogModal"

const DialogProfile = () => {
    return (
        <div>
            <button>View profile dialog</button>
            <DialogModal>
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
