import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Search a location.." className="form-control" autoFocus="on"
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-success w-100"/>
                </div>
                </div>
            </form>
            <h1>Horsham </h1>
            <ul>
                <li> Friday 19:00 </li>
                <li> Light rain showers</li>
            </ul>
            <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="Showers"/>
               <span className="temperature">17</span>
               <span className="unit">°C</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 94%
                        </li>
                        <li>
                       Humidity: 91%
                      </li>
                      <li>
                        Wind: 3 mph
                    </li>
                </ul>

            </div>
            </div>
   </div>
    )

}