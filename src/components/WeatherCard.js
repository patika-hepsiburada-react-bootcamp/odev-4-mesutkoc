import React from "react";
import { useCity } from "../contexts/CityContext";
import { useQuery } from "@apollo/client";
import { WEATHER_QUERY } from "../Queries/queries";
import { Button, Card } from "react-bootstrap";
import Rain from "../assets/rain.png";

function WeatherCard() {
  const { city } = useCity();

  const { loading, error, data } = useQuery(WEATHER_QUERY, {
    variables: { name: city },
  });

  return (
    <div className="weatherCardDetail">
      {error && <div>error</div>}
      {loading && <div>loading...</div>}
      {!loading && (
        <Card>
          <Card.Img
            className="justify-content-md-center"
            variant="top"
            src={Rain}
          />
          <Card.Body>
            <Card.Title>{data.getCityByName.name}</Card.Title>

            <ul className="cardList">
              <li>{data.getCityByName.weather.summary.description}</li>
              <li>{data.getCityByName.weather.wind.speed}</li>
              <li>{data.getCityByName.weather.clouds.humidity}</li>
              <li>{data.getCityByName.weather.temperature.actual}</li>
            </ul>
          </Card.Body>
          <Card.Footer>
            <Button>Details</Button>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}

export default WeatherCard;
