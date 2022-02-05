import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
import LoadingSpinner from "./LoadingSpinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  const [city, setCity] = useState("Taipei City");
  const [weatherOverview, setWeatherOverview] = useState({ searchLoaded: false});
 
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

    setWeatherOverview({
      searchLoaded: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      feelTemp: Math.round(response.data.main.feels_like),
      currentDate: setCurrentDate(response.data.dt * 1000),
      currentTime: setCurrentTime(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });

    
  }

  function search(city) {
    let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherOverview);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  if (weatherOverview.searchLoaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleInput}
                className="form-control"
              />
              <input type="submit" value="Search" className="btn btn-primary" />
            </form>
            <WeatherInfo data={weatherOverview} />
            <WeatherForecast coordinates={weatherOverview.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
      search(city);
      return (
        <div className="Weather">
          <div className="container">
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
              <LoadingSpinner />
            </div>
          </div>
        </div>
      );
    }
  }
