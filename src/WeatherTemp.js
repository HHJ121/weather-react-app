import React, { useState } from "react";

export default function Weathertemp(props) {
  const [temp, setTemp] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setTemp((props.celsius * 9) / 5 + 32);
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemp(props.celsius);
  }

  if (temp === "celsius") {
    return (
      <div className="WeatherTemp">
        <strong>{props.celsius}</strong>
        <span className="units">
          °C /{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <strong>{Math.round(temp)}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          / °F{" "}
        </span>
      </div>
    );
  }
}
