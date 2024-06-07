import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import useSound from 'use-sound'
import CitySearch from './components/CitySearch';
import WeatherIcon from './components/WeatherIcon';
import SideInfos from './components/SideInfos';
import BottomBlocks from './components/BottomBlocks';
import weatherPNG from './img/weather.png'
import cloud from './sounds/cloud.mp3'
import mist from './sounds/mist.mp3'
import rainy from './sounds/rain.mp3'
import snow from './sounds/snow.mp3'
import sunny from './sounds/sunny.mp3'
import thunderstorm from './sounds/thunderstorm.mp3'
import windy from './sounds/wind.mp3'

function App() {

  const api = process.env.REACT_APP_API

  const [input,setInput] = useState(null)
  const [lat,setLat] = useState()
  const [lon,setLon] = useState()
  const [error,setError] = useState(false)
  const [searche,setSearch] = useState(false)
  const [cityName,setCityName] = useState('')
  const [temperature,setTemperature] = useState('')
  const [weather,setWeather] = useState('')
  const [feltTemperature,setFeltTemperature] = useState('')
  const [show,setShow] = useState(false)
  // Bottom Blocks
  const [state,setState] = useState('')
  const [wind,setWind] = useState('')
  const [humidity,setHumidity] = useState('')
  const [rain,setRain] = useState('0')
  const [weatherLogo,setWeatherLogo] = useState('')
  // Sounds
  const [cloudSound] = useSound(cloud)
  const [mistSound] = useSound(mist)
  const [rainSound] = useSound(rainy)
  const [snowSound] = useSound(snow)
  const [sunnySound] = useSound(sunny)
  const [thunderstormSound] = useSound(thunderstorm)
  const [windSound] = useSound(windy)

  const search = (e) =>{
    setInput(e.target.value)
    if(e.target.value === ''){
      setInput(null)
    }
  }
  const searchLocation = () =>{
    const cityData = async () => {
      const city = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${api}`)
      if(input !== null){
        if(city.data.length === 0){
          setError(true)
        }else{
          setLat(city.data[0].lat)
          setLon(city.data[0].lon)
          setError(false)
          setSearch(true)
        }
      }else{
        setError(true)
      };
      }
    cityData();
  }

  useEffect(() =>{
    if(searche === true){
      const weatherData = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`)
        setShow(true)
        setCityName(response.data.name)
        setTemperature((Math.floor(response.data.main.temp)))
        setFeltTemperature((Math.floor(response.data.main.feels_like)))
        setWeather(response.data.weather[0].main)
        setState(response.data.sys.country)
        setWind((Math.floor(response.data.wind.speed)))
        setHumidity(response.data.main.humidity)
        setWeatherLogo(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        if(response.data.weather[0].icon === '01d' || response.data.weather[0].icon === '01n' || response.data.weather[0].icon === '02d' || response.data.weather[0].icon === '02n'){
          sunnySound()
        }else if(response.data.weather[0].icon === '03d' || response.data.weather[0].icon === '03n'){
          windSound()
        }else if(response.data.weather[0].icon === '04d' || response.data.weather[0].icon === '04n'){
          cloudSound()
        }else if(response.data.weather[0].icon === '09d' || response.data.weather[0].icon === '09n' || response.data.weather[0].icon === '10d' || response.data.weather[0].icon === '10n') {
          rainSound()
        }else if(response.data.weather[0].icon === '11d' || response.data.weather[0].icon ==='11n'){
          thunderstormSound()
        }else if(response.data.weather[0].icon === '13d' || response.data.weather[0].icon === '13n'){
          snowSound()
        }else if(response.data.weather[0].icon === '50d' || response.data.weather[0].icon === '50n'){
          mistSound()
        }
        if(response.data.rain != null){
        setRain(Object.values(response.data.rain))
        }else{
          setRain('0')
        }
        setSearch(false)
      }
      weatherData();
    }
  },[searchLocation,api,cloudSound,lat,lon,mistSound,rainSound,snowSound,sunnySound,thunderstormSound,windSound,searche])

  return (
    <div className="wrapper">
      <div className='weatherWrapper'>
        <div className='inputBlocks'>
          <CitySearch img={weatherPNG} setSearchInput={(e) => search(e)} setSearchLocation={searchLocation} />
          {error && <p className='error'>*There is no city found!</p>}
        </div>
        {show && <div className='weatherShowns'>
        <p className="cityName">{cityName}</p>
          <div className='mainShowns'>
            <WeatherIcon weatherLogo={weatherLogo} />
            <SideInfos temperature={temperature} weather={weather} feltTemperature={feltTemperature} />
          </div>
          <div className='bottomShowns'>
            <BottomBlocks state={state} wind={wind} rain={rain} humidity={humidity} />
          </div>
        </div>}
      </div>
    </div>
  );
}

export default App;
