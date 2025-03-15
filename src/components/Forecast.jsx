export const Forecast = ({ dailyData }) => {

    if (dailyData.length === 0) return null;

    const getNext7Days = () => {
        const days = [];
        const options = { day: '2-digit', month: 'short', weekday: 'short' };

        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            days.push(date.toLocaleDateString('en-GB', options));
        }

        return days;
    };

    const next7Days = getNext7Days();

    return (
        <div className="forecast-container">
            <div className="header">
                <span>Forecast</span>
                <span>7 Days</span>
            </div>
            <div className="seven-days">
                {dailyData.list.slice(0, 7).map((data, key) => (
                        <div key={key}>
                                <div className="day-container">
                                    <img
                                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                                        alt="weather-icon"
                                    />
                                    <span>
                                        {Math.floor(data.temp.day)}° / {Math.floor(data.temp.night)}°
                                    </span>
                                </div>
                                <span>{next7Days[key]}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};