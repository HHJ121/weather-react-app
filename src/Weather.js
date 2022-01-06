import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="wrapper">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            autoComplete="off"
            autoFocus="on"
          />
          <input type="submit" value="Search" />
        </form>
        <h2>City</h2>
        <p>
          <ReactAnimatedWeather
            icon={"PARTLY_CLOUDY_NIGHT"}
            color={"rgb(245, 225, 225)"}
            size={70}
            animate={"true"}
          />
          <strong>19</strong> °C / °F description
        </p>
        <ul>
          <li>Date</li>
          <li>Time</li>
          <br />
          <br />
          <li>Feel like: °C</li>
          <li>Humidity: %</li>
          <li>Wind: Km/hr</li>
        </ul>
      </div>
    </div>
  );
}
