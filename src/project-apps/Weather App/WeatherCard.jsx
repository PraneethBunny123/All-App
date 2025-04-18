import ForeCastList from "./ForeCastList"
import kelvinToFahrenheit from "./kelvinToFahrenheit"

export default function WeatherCard({weatherData}) {

    const cityName = weatherData?.city.name
    const temp = kelvinToFahrenheit(weatherData?.list[0].main.temp)
    const feelsLike = kelvinToFahrenheit(weatherData?.list[0].main.feels_like)
    const description = weatherData?.list[0].weather[0].description
    const icon = weatherData?.list[0].weather[0].icon
    const dt_txt = weatherData?.list[0].dt_txt

    const filteredTempearture = weatherData?.list.filter(obj => (
        obj?.dt_txt.includes('12:00:00')
    ))
    
    return (
        <div>
            {weatherData &&
                <div>
                    <h1>Today's weather at {cityName}</h1>
                    <p>{description}</p>
                    <p>temperature: {temp} degrees fahrenheit</p>
                    <p>feels like: {feelsLike} degrees fahrenheit</p>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
                        
                    <ForeCastList forecastList={filteredTempearture}/>
                </div>
            }
        </div>
    )
}