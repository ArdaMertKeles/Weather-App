import React from "react";

function CitySearch({img,setSearchInput,setSearchLocation}){
    return(
        <div className="searchBlocks">
            <input type="text" onChange={setSearchInput} placeholder="Search for a City." />
            <button onClick={setSearchLocation}>
                Check!
                    <img src={img} alt="" />
            </button>
        </div>       
    )
}

export default CitySearch