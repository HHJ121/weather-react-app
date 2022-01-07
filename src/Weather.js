import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./Weather.css";
import { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import Coder from "./Coder";

export default function Weather(props) {
  const [city, setCity] = useState("Taipei City");
  const [weatherOverview, setWeatherOverview] = useState({
    city: "Taipei City",
  });
  const [searchLoaded, setSearchLoaded] = useState(false);

  function setCurrentTime(time) {
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

  function setCurrentDate(time) {
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

  function showWeatherOverview(response) {
    setSearchLoaded(true);

    setWeatherOverview({
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      feelTemp: Math.round(response.data.main.feels_like),
      currentDate: setCurrentDate(response.data.dt * 1000),
      currentTime: setCurrentTime(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });

    return weatherOverview;
  }

  function search(city) {
    let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeatherOverview);
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let cityName = handleInput();
    search(cityName);
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
          <h2>{weatherOverview.city}</h2>
          <p>
            <WeatherIcon iconCode={weatherOverview.icon} />
            {""}
            <strong>{weatherOverview.temp}</strong> °C / °F
            <br />
            <em>"{weatherOverview.description}"</em>
          </p>
          <ul>
            <li>{weatherOverview.currentDate}</li>
            <li>{weatherOverview.currentTime}</li>
            <br />
            <br />
            <li>Feel like: {weatherOverview.feelTemp} °C</li>
            <li>Humidity: {weatherOverview.humidity} %</li>
            <li>Wind: {weatherOverview.wind} Km/hr</li>
          </ul>
        </div>
        <Coder />
      </div>
    );
  } else {
    if (search("Taipei City")) {
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
            <p>
              <WeatherIcon iconCode={weatherOverview.icon} />
              {""}
              <strong>{weatherOverview.temp}</strong> °C / °F
              <br />
              <em>"{weatherOverview.description}"</em>
            </p>
            <ul>
              <li>{weatherOverview.currentDate}</li>
              <li>{weatherOverview.currentTime}</li>
              <br />
              <br />
              <li>Feel like: {weatherOverview.feelTemp} °C</li>
              <li>Humidity: {weatherOverview.humidity} %</li>
              <li>Wind: {weatherOverview.wind} Km/hr</li>
            </ul>
          </div>
          <Coder />
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
            <h2>Loading . . . </h2>
            <p>Getting the data ready...</p>
            <div className="loader">
              <Loader
                type="Grid"
                color="rgb(245, 225, 225)"
                height={150}
                width={150}
                timeout={70000}
              />
            </div>
          </div>
          <Coder />
        </div>
      );
    }
  }
}
