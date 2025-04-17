export default function WeatherCard({weatherData}) {

    const cityName = weatherData?.city?.name
    const temp = weatherData?.list[0]?.main?.temp
    const description = weatherData?.list[0]?.weather[0]?.description
    const icon = weatherData?.list[0]?.weather[0]?.icon
    const dt_txt = weatherData?.list[0]?.dt_txt

    const filteredTempearture = weatherData?.list.filter(obj => (
        obj?.dt_txt.includes('12:00:00')
    ))

    console.log(filteredTempearture)
    
    const fahrenheitTemperature = ((temp-273.15)*9/5)+32

    return (
        <div>
            <h1>{cityName ? `Todays weather at ${cityName}` : null}</h1>
            <p>{description}</p>
            <p>{fahrenheitTemperature ? `temperature: ${fahrenheitTemperature} degrees fahrenheit` : null}</p>
            {icon ? <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} /> : null}
        </div>
    )
}