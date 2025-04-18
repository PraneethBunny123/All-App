import { createPortal } from "react-dom"

export default function DialogModal({children, dialogRef}) {

    function handleCloseModal() {
        dialogRef.current.close()
    }

    return createPortal(
        <dialog ref={dialogRef} className="rounded-lg p-6 shadow-xl">
            <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
                ❌
            </button>
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}