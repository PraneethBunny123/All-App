import { createPortal } from "react-dom"
import ForecastCard from "./ForecastCard"

const ForecastModal = ({data, dialogRef}) => {
    function handleModalClose() {
        dialogRef.current.close()
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
