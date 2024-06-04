import React from "react";

function WeatherIcon({weatherLogo}){
    return(
        <div className="iconContainer">
            <img src={weatherLogo} alt="" className="icon" />
        </div>
    )
}

export default WeatherIcon