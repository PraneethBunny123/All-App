import kelvinToFahrenheit from "./kelvinToFahrenheit"

export default function ForeCastList({forecastList}) {
    console.log(forecastList)

    return (
        <div>
            {forecastList.map(data => {
                const day = new Date(data.dt_txt).toLocaleDateString('en-us', {weekday: 'short'})
                const temp = kelvinToFahrenheit(data.main.temp)
                const feelsLike = kelvinToFahrenheit(data.main.feels_like)
                const description = data.weather[0].description
                const icon = data.weather[0].icon

                return (
                    <div>
                        <p>{day}</p>
                        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
                        <p>{description}</p>
                        <p>temp: {temp}</p>
                        <p>feels like: {feelsLike}</p>
                    </div>
                )
            })}
        </div>
    )
}