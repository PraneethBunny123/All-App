import { useState,useRef } from "react"
import ForecastCard from "./ForecastCard"
import ForecastModal from "./forecastModal"

export default function ForecastList({forecastList}) {
    const [selectedCard, setSelectedCard] = useState(null)
    const dialogRef = useRef()
    console.log(selectedCard)
    
    function handleOpenModal(data) {
        setSelectedCard(data)
        dialogRef.current?.showModal()
    }

    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">5-Day Forecast</h3>
            <div className="grid gap-4 sm:grid-cols-2">
                {forecastList.map((data, index) => ( 
                    <ForecastCard data={data} key={index} handleOpenModal={() => handleOpenModal(data)}/>
                ))}
            </div>
            {selectedCard && 
                <ForecastModal data={selectedCard} dialogRef={dialogRef}/>
            }
        </div>
    )
}