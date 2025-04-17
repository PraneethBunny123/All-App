export default function(temp) {
    const fahrenheit = ((temp-273.15)*9/5+32).toFixed(1)
    return fahrenheit
}