import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function forecastDay() {
    let date = new Date(props.data.dt*1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];

    return day;
  }

  function forecastMaxTemp() {
    let maxTemp = Math.round(props.data.temp.max);

    return `${maxTemp}`;
  }

  function forecastMinTemp() {
    let minTemp = Math.round(props.data.temp.min);

    return `${minTemp}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{forecastDay()}</div>
      <div className="icon">
        <WeatherIcon iconCode={props.data.weather[0].icon} size={39} />
      </div>
      <span className="temp-max">{forecastMaxTemp()}°</span> |{" "}
      <span className="temp-min">{forecastMinTemp()}°</span>
    </div>
  );
}
