import { createPortal } from "react-dom"

export default function DialogModal({children, dialogRef}) {

    function handleCloseModal() {
        dialogRef.current.close()
    }

    return createPortal(
        <dialog 
            ref={dialogRef} 
            className="rounded-xl p-6 w-full max-w-md shadow-2xl bg-white relative open:animate-fade-in"
        >
            <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
                ❌
            </button>
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}