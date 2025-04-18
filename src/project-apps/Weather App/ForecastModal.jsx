import { createPortal } from "react-dom"
import ForecastCard from "./ForecastCard"

const ForecastModal = ({data, dialogRef, onClose}) => {
    function handleModalClose() {
        dialogRef.current?.close()
        onClose()
    }

    return createPortal(
        <dialog ref={dialogRef}>
            <button 
                onClick={handleModalClose}
                
            >
                ❌
            </button>
            <ForecastCard data={data} variant="modal"/>
        </dialog>,
        document.getElementById('modal')
    )
}

export default ForecastModal
