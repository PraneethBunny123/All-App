import COUNTRIES from "./countries"

export default function Dropdown() {
    return (
        <div>
            <select>
                {COUNTRIES.map(country => (
                    <option key={country}>{country}</option>
                ))}  
            </select>
        </div>
    )
}