export default function WeatherCard({weatherData}) {
    return (
        <div>
            <h1>Todays weather at {weatherData?.city?.name}</h1>
            <p>37 degrees</p>
        </div>
    )
}