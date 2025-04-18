import { createPortal } from "react-dom"
import ForecastCard from "./ForecastCard"

const ForecastModal = ({data, dialogRef}) => {
    // const dialogRef = useRef()

    return createPortal(
        <dialog ref={dialogRef}>
            <ForecastCard data={data}/>
        </dialog>,
        document.getElementById('modal')
    )
}

export default ForecastModal
