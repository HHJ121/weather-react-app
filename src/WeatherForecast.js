import axios from "axios";
import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setForecastLoaded(false);
  }, [props.coordinates]);

  function loadForecast() {
    let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeatherForecast);
  }

  function displayWeatherForecast(response) {
    console.log(response);
    setForecastLoaded(true);

    setForecast(response.data.daily);
  }

  if (forecastLoaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loadForecast();

    return null;
  }
}
