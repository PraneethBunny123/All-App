import { useState } from "react"
import ForecastCard from "./ForecastCard"

export default function ForecastList({forecastList}) {
    const [forecastCard, setForecastCard] = useState(null)
    // console.log(forecastCard)


    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">5-Day Forecast</h3>
            <div className="grid gap-4 sm:grid-cols-2">
                {forecastList.map((data, index) => {
                    return <ForecastCard data={data} key={index}/>
                })}
            </div>
        </div>
    )
}