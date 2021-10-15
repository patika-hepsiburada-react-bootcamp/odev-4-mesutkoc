import React from "react";
import TurkeyApp from "./TurkeyApp";
import WeatherCard from "./WeatherCard";
import "./style.css"

export default function WeatherContainer() {
  return (
    <div className="weatherContainer">
      <div className="turkeyMap">
        <TurkeyApp></TurkeyApp>
      </div>
      <div className="weatherCard">
        <WeatherCard></WeatherCard>
      </div>
    </div>
  );
}
