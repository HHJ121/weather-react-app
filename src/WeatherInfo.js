import React from "react";

import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <p>
        <WeatherIcon iconCode={props.data.icon} size={70} />
        <WeatherTemp celsius={props.data.temp} />
        <br />
        <em className="description text-capitalize">
          "{props.data.description}"
        </em>
      </p>
      <ul>
        <li>{props.data.currentDate}</li>
        <li>{props.data.currentTime}</li>

        <br />
        <li>Feel like: {props.data.feelTemp} °C</li>
        <li>Humidity: {props.data.humidity} %</li>
        <li>Wind: {props.data.wind} Km/hr</li>
      </ul>
      
    </div>
  );
}
