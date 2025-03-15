import Button from '@mui/material/Button';
import axios from 'axios';

export const PopularCities = ({ dailyData, setLat, setLon, apiKey }) => {

    if (dailyData.length === 0) return null;

    const searchCityData = async (city) => {
        const cityData = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
        setLat(cityData.data[0].lat)
        setLon(cityData.data[0].lon)
    }

    return (
        <div className='popular-cities'>
            <span className='header'>Popular Cities</span>
            <div className='cities'>
                <Button onClick={() => searchCityData('istanbul')} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>Istanbul</span>
                </Button>
                <Button onClick={() => searchCityData('new york')} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>New York</span>
                </Button>
                <Button onClick={() => searchCityData('berlin')} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>Berlin</span>
                </Button>
                <Button onClick={() => searchCityData('delhi')} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>New Delhi</span>
                </Button>
                <Button onClick={() => searchCityData('tokyo')} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='btn'>Tokyo</span>
                </Button>
            </div>
        </div>
    )
}