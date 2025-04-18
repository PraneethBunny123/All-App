import { createPortal } from "react-dom"

const ForecastModal = ({children}) => {
  return createPortal(
    <dialog>
        {children}
    </dialog>,
    document.getElementById('modal')
  )
}

export default ForecastModal
