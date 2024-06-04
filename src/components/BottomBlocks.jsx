import React from "react";

function BottomBlocks({state,rain,humidity,wind}){
    return(
        <div className="bottomBlocks">
            <div className="countryBlock">
                <p className="country">{state}</p>
            </div>
            <div className="block">
                <p>Rain: {rain}%</p>
                <p>Humidity: {humidity}%</p>
                <p>Wind: {wind} km/s</p>
            </div>
        </div>
    )
}

export default BottomBlocks