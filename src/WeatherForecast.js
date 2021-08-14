import React from 'react';
import WeatherIcon from "./WeatherIcon"
import "./WeatherForecast.css"

export default function WeatherForecast () {

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