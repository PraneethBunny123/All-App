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
        setIsLoading(true)
        setError(null)
        setCity('')
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)

            if(!response.ok) {
                throw new Error('city not found')
            }

            const resData = await response.json()
            setWeatherData(resData)
        } catch(err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-500 flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold text-white mb-6">Weather App</h1>
            <SearchBar 
                handleChange={handleChange}
                handleFetch={fetchWeatherData}
                city={city}
            />
            {isLoading && <p className="text-white mt-4">Loading weather data...</p>}
            {!isLoading &&
                <WeatherCard weatherData={weatherData}/>
            }
            {error && <p className="text-red-700 bg-white px-4 py-2 rounded shadow mt-4">{error}</p>}
        </div>
    )
}