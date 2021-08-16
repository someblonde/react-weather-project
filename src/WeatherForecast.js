import React, { useState } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState(false);
     let [forecast, setForecast] = useState(null);


  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
 

   
      if (loaded) {
          console.log(forecast);
          return  ( 
        <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
             return (
                 <div className="col" key={index}> 
                 <WeatherForecastDay data={dailyForecast} />
               </div>

             );

            }
            })}
       </div>
     </div>
      );

      } else {

     let apiKey = "eadddec13a962cb9c3c421b81823ffb8";
     let longitude = props.coordinates.lon;
     let latitude = props.coordinates.lat;
     let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handleResponse);

     return null;
    
}
}