import kelvinToFahrenheit from "./kelvinToFahrenheit"

export default function ForecastList({forecastList}) {

    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">5-Day Forecast</h3>
            <div className="grid gap-4 sm:grid-cols-2">
                {forecastList.map((data, index) => {
                    const day = new Date(data.dt_txt).toLocaleDateString('en-us', {weekday: 'long'})
                    const date = new Date(data.dt_txt).toLocaleDateString('en-us', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })
                    const temp = kelvinToFahrenheit(data.main.temp)
                    const feelsLike = kelvinToFahrenheit(data.main.feels_like)
                    const description = data.weather[0].description
                    const icon = data.weather[0].icon

                    return (
                        <div 
                            key={index}
                            className="bg-blue-100 rounded-lg p-4 shadow hover:shadow-md transition hover:scale-105 transition-transform duration-200"
                        >
                            <p className="font-semibold">{day} - {date}</p>
                            <p className="capitalize text-sm text-gray-600">{description}</p>
                            <p className="text-sm">temp: {temp}°F</p>
                            <p className="text-sm text-gray-500">feels like: {feelsLike}°F</p>
                            <img 
                                src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                                alt={description} 
                                className="mx-auto mt-2"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}