import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

export default function WeatherApp() {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const apiKey = '08a8546c36dfc801fcd6421257390d29'

    function handleChange(e) {
        setCity(e.target.value)
    }

    async function fetchWeatherData() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)

        const resData = response.json()
        console.log(response)
        console.log(resData)
    }

    return (
        <div>
            <h1>Weather App</h1>
            <SearchBar 
                handleChange={handleChange}
                handleFetch={fetchWeatherData}
            />
            <WeatherCard city={city}/>
        </div>
    )
}