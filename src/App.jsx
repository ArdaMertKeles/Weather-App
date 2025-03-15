import axios from "axios"
import { useState, useEffect, useMemo } from "react"
import './styles/style.css'
import { CurrentWeather } from "./components/CurrentWeather"
import { Map } from "./components/Map"
import { PopularCities } from "./components/PopularCities"
import { Forecast } from "./components/Forecast"
import { Summary } from "./components/Summary"
import { SearchLocation } from "./components/SearchLocation"
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import svg from './assets/undraw_weather_7n28.svg'
import errorSvg from './assets/undraw_page-not-found_6wni.svg'

function App() {

  const apiKey = process.env.REACT_APP_API_KEY

  const [city, setCity] = useState('')
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [search, setSearch] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [dailyData, setDailyData] = useState([])
  const [hourlyData, setHourlyData] = useState([])
  const [currentData, setCurrentData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchErr, setSearchErr] = useState(false)

  const searchCityData = async (e) => {
    e.preventDefault()
    if (city.length > 1) {
      const cityData = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
      if (cityData.data.length !== 0) {
        setLat(cityData.data[0].lat)
        setLon(cityData.data[0].lon)
        setSearchErr(false)
      } else {
        setSearchErr(true)
      }
      setSearch(true)
    }
  }

  useEffect(() => {
    if (search === true && lat && lon) {
      const weatherData = async () => {
        setIsLoading(true)
        const dailyData = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${7}&appid=${apiKey}&units=metric`)
        const hourlyData = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&cnt=7`)
        const currentData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        setDailyData(dailyData.data)
        setHourlyData(hourlyData.data)
        setCurrentData(currentData.data)
        setIsLoading(false)
      }
      weatherData();
    }
  }, [lat, lon, search, apiKey])

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(4px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#003892',
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#aab4be',
      borderRadius: 20 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));

  const memoizedSwitch = useMemo(() => (
    <MaterialUISwitch onChange={() => setIsDark((prev) => !prev)} sx={{ m: 1 }} defaultChecked />
  ), []);


  return (
    <div className="wrapper" dark-theme={isDark ? 'dark' : 'light'}>
      <div className="weather-container">
        <div className="header-container">
          <span className="search-input">
            <SearchLocation search={searchCityData} setCity={setCity} />
          </span>
          <FormControlLabel
            control={memoizedSwitch}
          />
        </div>
        {!isLoading && !searchErr && <div className="top-container">
          <CurrentWeather currentData={currentData} />
          {lat && lon && <Map lat={lat} lon={lon} isDark={isDark} currentData={currentData} />}
          <PopularCities dailyData={dailyData} setLat={setLat} setLon={setLon} apiKey={apiKey} />
        </div>}
        {!isLoading && !searchErr && <div className="bottom-container">
          <Forecast dailyData={dailyData} />
          <Summary isDark={isDark} hourlyData={hourlyData} />
        </div>}
        {!search && !isLoading && <div className="none-container">
          <p>Search for a City</p>
          <img src={svg} alt="" />
        </div>}
        {searchErr && <div className="err-container">
          <p>No city data found</p>
          <img src={errorSvg} alt="" />
        </div>}
        {isLoading && <div className="loader-container">
          <div className="loader"></div>
        </div>}
      </div>
    </div>
  );
}

export default App;
