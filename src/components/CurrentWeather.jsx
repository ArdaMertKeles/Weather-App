import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WavesIcon from '@mui/icons-material/Waves';

export const CurrentWeather = ({ currentData }) => {

    const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes()

    if (currentData.length === 0) return
    return (
        <div className='current-weather'>
            <div className="time-details">
                <span className="header">Current Weather</span>
                <span className="time">{showTime}</span>
            </div>
            <div className="main-details">
                <img draggable='false' src={`https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`} alt="" />
                <div className="weather-box">
                    <div className='weather'>
                        <p>{Math.floor(currentData.main.temp)}</p>
                        <p>°C</p>
                    </div>
                    <p className='description'>{currentData.weather[0].description}</p>
                </div>
            </div>
            <div className="details">
                <div className="detail-box">
                    <WavesIcon />
                    <p>{currentData.main.sea_level}</p>
                </div>
                <div className="detail-box">
                    <WaterDropIcon />
                    <p>{currentData.main.humidity}%</p>
                </div>
                <div className="detail-box">
                    <AirIcon />
                    <p>{Math.floor(currentData.wind.speed)} km/h</p>
                </div>
                <div className="detail-box">
                    <WbSunnyIcon />
                    <p>{Math.floor(currentData.main.feels_like)}</p>
                </div>
            </div>
        </div>
    )
}