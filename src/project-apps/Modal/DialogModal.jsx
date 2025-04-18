import { createPortal } from "react-dom"

export default function DialogModal({ children, dialogRef }) {
    function handleCloseModal() {
        dialogRef.current.close()
    }

    return createPortal(
        <dialog
            ref={dialogRef}
            className="p-6 rounded-xl w-full max-w-md bg-white shadow-xl relative open:fixed open:inset-0 open:flex open:items-center open:justify-center"
        >
            <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
                ❌
            </button>
            {children}
        </dialog>,
        document.getElementById("modal")
    )
}
