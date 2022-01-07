import React from "react";
import axios from "axios";

import { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function DefaultCity() {
  const [defaultOverview, setDefaultOverview] = useState("");

  function setDefaultCurrentTime(time) {
    let currentTime = new Date(time);
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  function setDefaultCurrentDate(time) {
    let currentDate = new Date(time);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[currentDate.getDay()];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let month = months[currentDate.getMonth()];
    let date = currentDate.getDate();

    return `${day}, ${month} ${date}`;
  }

  function showDefaultOverview(response) {
    setDefaultOverview({
      city: "Taipei City",
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      feelTemp: Math.round(response.data.main.feels_like),
      currentDate: setDefaultCurrentDate(response.data.dt * 1000),
      currentTime: setDefaultCurrentTime(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });

    return defaultOverview;
  }

  let city = "Taipei City";
  let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showDefaultOverview);

  return (
    <div className="DefaultCity">
      <h2>{defaultOverview.city}</h2>
      <p>
        <WeatherIcon iconCode={defaultOverview.icon} />
        <strong>{defaultOverview.temp}</strong> °C / °F
        <br />
        <em>"{defaultOverview.description}"</em>
      </p>
      <ul>
        <li>{defaultOverview.currentDate}</li>
        <li>{defaultOverview.currentTime}</li>
        <br />
        <br />
        <li>Feel like: {defaultOverview.feelTemp} °C</li>
        <li>Humidity: {defaultOverview.humidity} %</li>
        <li>Wind: {defaultOverview.wind} Km/hr</li>
      </ul>
    </div>
  );
}
