import { createPortal } from "react-dom"
import ForecastCard from "./ForecastCard"

const ForecastModal = ({data, dialogRef}) => {

    return createPortal(
        <dialog ref={dialogRef}>
            <ForecastCard data={data} variant="modal"/>
        </dialog>,
        document.getElementById('modal')
    )
}

export default ForecastModal
