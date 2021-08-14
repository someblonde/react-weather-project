import React from 'react';
import WeatherIcon from "./WeatherIcon"
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast (props) {
  function handleResponse(response) {
    console.log(response.data);
  }
 

     let apiKey = "eadddec13a962cb9c3c421b81823ffb8";
     let longitude = props.coordinates.lon;
     let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handleResponse);
    return  (<div className="WeatherForecast">
        <div className="row">
        <div className="col">
            <div className="forecast-day">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">
                    19°
                </span>
                <span className="WeatherForecast-temperature-min">
                    10°
                </span>
                19 00
            </div>
            </div>
        </div>
        </div>
    );
}