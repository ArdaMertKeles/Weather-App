import React from "react";

function SideInfos({temperature,weather,feltTemperature}) {
    return (
        <div className="sideInfosWrapper">
                <p className="temperature">{temperature}
                <p className="celcius">°C</p>
                </p>
                <div>
                    <p className="weather">{weather}</p>
                    <p className="feltTemperature">{feltTemperature}<p className="celcius">°C</p> felt.</p>
                </div>
        </div>
    )
}

export default SideInfos