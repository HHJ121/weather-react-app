import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";
import DefaultCity from "./DefaultCity";
import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("Taipei City");
  const [weatherOverview, setWeatherOverview] = useState(null);
  const [searchLoaded, setSearchLoaded] = useState(false);

  function showWeatherOverview(response) {
    setSearchLoaded(true);
    let temp = Math.round(response.data.main.temp);
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let description = response.data.weather[0].description;
    let feelTemp = Math.round(response.data.main.feels_like);

    setWeatherOverview(
      <div>
        <p>
          <ReactAnimatedWeather
            icon={"PARTLY_CLOUDY_NIGHT"}
            color={"rgb(245, 225, 225)"}
            size={70}
            animate={"true"}
          />
          <strong>{temp}</strong> °C / °F
          <div>
            <em>"{description}"</em>
          </div>
        </p>
        <ul>
          <li>Date</li>
          <li>Time</li>
          <br />
          <br />
          <li>Feel like: {feelTemp} °C</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {wind} Km/hr</li>
        </ul>
      </div>
    );

    return weatherOverview;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeatherOverview);
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  if (searchLoaded) {
    return (
      <div className="Weather">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              autoComplete="off"
              autoFocus="on"
              onChange={handleInput}
            />
            <input type="submit" value="Search" />
          </form>
          <h2>{city}</h2>
          {weatherOverview}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              autoComplete="off"
              autoFocus="on"
              onChange={handleInput}
            />
            <input type="submit" value="Search" />
          </form>
          <DefaultCity />
        </div>
      </div>
    );
  }
}
