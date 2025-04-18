import { createPortal } from "react-dom"
import ForecastCard from "./ForecastCard"

const ForecastModal = ({data, dialogRef, onClose}) => {
    function handleModalClose() {
        dialogRef.current?.close()
        onClose()
    }

    return createPortal(
        <dialog 
            ref={dialogRef} 
            className="rounded-lg p-6 bg-white w-[90%] max-w-md shadow-xl relative"    
        >
            <button 
                onClick={handleModalClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
                ❌
            </button>
            <ForecastCard data={data} variant="modal"/>
        </dialog>,
        document.getElementById('modal')
    )
}

export default ForecastModal
