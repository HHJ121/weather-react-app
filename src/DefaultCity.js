import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import { useState } from "react";

export default function DefaultCity() {
  const [overview, setOverview] = useState("");

  function showDefaultOverview(response) {
    let temp = Math.round(response.data.main.temp);
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let description = response.data.weather[0].description;
    let feelTemp = Math.round(response.data.main.feels_like);

    setOverview(
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

    return overview;
  }

  let city = "Taipei City";
  let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showDefaultOverview);

  return (
    <div className="DefaultCity">
      <h2>{city}</h2>
        {overview}
     
    </div>
  );
}
