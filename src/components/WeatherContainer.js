import React from "react";
import TurkeyApp from "./TurkeyApp";
import WeatherCard from "./WeatherCard";
import { useCityname } from "../contexts/CitynameContext";

import "./style.css";

export default function WeatherContainer() {
  const { cityname } = useCityname();
  return (
    <div className="weatherContainer">
      <div className="weatherCard">
        <WeatherCard></WeatherCard>
      </div>
      <div className="d-flex">
        <div className="w-75">
          <TurkeyApp></TurkeyApp>
        </div>
        <div className="w-25 d-flex justify-content-center align-items-center ">
          <h3>{cityname}</h3>
        </div>
      </div>
    </div>
  );
}
