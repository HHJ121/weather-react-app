import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Monday</div>
          <div>
            <WeatherIcon iconCode={"01n"} size={37} />
          </div>
          <span className="temp-max">17°</span> |{" "}
          <span className="temp-min">10°</span>
        </div>
      </div>
    </div>
  );
}
