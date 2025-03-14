import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WavesIcon from '@mui/icons-material/Waves';

export const CurrentWeather = () => {

    return (
        <div className='current-weather'>
            <span className="header">Current Weather</span>
            <span className="time">6:25 AM</span>
            <div className="main-details">
                <img draggable='false' src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
                <div className="weather-box">
                    <div className='weather'>
                        <p>24</p>
                        <p>°C</p>
                    </div>
                    <p>Heavy Rain</p>
                </div>
            </div>
            <div className="details">
                <div className="detail-box">
                    <WavesIcon />
                    <p>173</p>
                </div>
                <div className="detail-box">
                    <WaterDropIcon />
                    <p>92%</p>
                </div>
                <div className="detail-box">
                    <AirIcon />
                    <p>6 km/h</p>
                </div>
                <div className="detail-box">
                    <WbSunnyIcon />
                    <p>3</p>
                </div>
            </div>
        </div>
    )
}