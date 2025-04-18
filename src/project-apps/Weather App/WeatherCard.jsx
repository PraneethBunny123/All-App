import ForecastList from "./ForeCastList"
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
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md text-center">
            {weatherData &&
                <div>
                    <h1 className="text-xl font-semibold text-gray-800 mb-2">Today's weather at {cityName}</h1>
                    <p className="text-gray-600 capitalize">{description}</p>
                    <p className="mt-2 text-lg font-medium">temperature: {temp} degrees fahrenheit</p>
                    <p className="text-sm text-gray-500 mb-2">feels like: {feelsLike}°F</p>
                    <img 
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                        alt={description} 
                        className="mx-auto mb-4"    
                    />
                        
                    <ForecastList forecastList={filteredTempearture}/>
                </div>
            }
        </div>
    )
}