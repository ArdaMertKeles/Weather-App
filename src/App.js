import axios from "axios"
import { useState, useEffect } from "react"

import './styles/style.css'
import { Map } from "./components/Map"
import { PopularCities } from "./components/PopularCities"

function App() {

  const apiKey = process.env.REACT_APP_API_KEY

  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [search, setSearch] = useState(false)


  const searchCityData = async () => {
    const city = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${'istanbul'}&limit=1&appid=${apiKey}`)
    setLat(city.data[0].lat)
    setLon(city.data[0].lon)
    setSearch(true)
  }

  useEffect(() => {
    if (search === true) {
      const weatherData = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        console.log(response)
      }
      weatherData();
    }
  }, [lat, lon, search, apiKey])

  return (
    <div>
      <button onClick={searchCityData}>click</button>
      {lat && lon && <Map lat={lat} lon={lon} />}
      <PopularCities />
    </div>
  );
}

export default App;
