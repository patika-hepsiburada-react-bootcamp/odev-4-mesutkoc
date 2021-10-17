import React from "react";
import { useCity } from "../contexts/CityContext";

import { useQuery } from "@apollo/client";
import { WEATHER_QUERY } from "../Queries/queries";
import { Navbar, Container, Image, Nav, Button } from "react-bootstrap";
import history from "./history";
import getIcon from "./wheathericon";
import windIcon from "../assets/wind.png";
import humidity from "../assets/humidity.png";
import celsius from "../assets/celsius.png";

function WeatherCard() {
  const { city } = useCity();

  const { loading, error, data } = useQuery(WEATHER_QUERY, {
    variables: { name: city },
  });
  const kelvinToCelsius = (actual) => (actual - 273.15).toFixed(2);

  if (error) {
    return <div>Error {error}</div>;
  }
  if (loading) {
    return (
      <Navbar
        className="h-50"
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="dark"
      >
        <Container className="d-flex justify-content-center">
          <Nav className="bg-light px-3 py-1 rounded">
            <Navbar.Text className="text-dark fw-bold fs-4">
              Loading...
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    );
  }

  return (
    <div className="weatherCardDetail">
      {data.getCityByName === null && (
        <Navbar
          className="h-50"
          collapseOnSelect
          expand="lg"
          bg="info"
          variant="dark"
        >
          <Container className="d-flex justify-content-center">
            <Nav className="bg-light px-3 py-1 rounded">
              <Navbar.Text className="text-dark fw-bold fs-4">
                Cannot reach data!
              </Navbar.Text>
            </Nav>
          </Container>
        </Navbar>
      )}

      {data.getCityByName !== null && (
        <Navbar
          collapseOnSelect
          expand="lg"
          className="h-50"
          bg="info"
          variant="dark"
        >
          <Container>
            <Nav className="bg-light px-3 py-1 rounded">
              <Image
                className="weatherIcon"
                variant="top"
                src={getIcon(data.getCityByName.weather.summary.icon)}
              />
              <Navbar.Text className="text-dark fw-bold fs-4">
                {data.getCityByName.name.split(" ")[0]}
              </Navbar.Text>
            </Nav>
            <Nav className="bg-light px-3 py-1 rounded">
              <Image variant="top" className="listIcon" src={celsius} />
              <Navbar.Text className="text-dark  fw-bold">
                {kelvinToCelsius(data.getCityByName.weather.temperature.actual)}
              </Navbar.Text>
            </Nav>
            <Nav className="bg-light px-3 py-1 rounded">
              <Navbar.Text className="text-dark  fw-bold">
                {data.getCityByName.weather.summary.description}
              </Navbar.Text>
            </Nav>
            <Nav className="bg-light px-3 py-1 rounded">
              <Image variant="top" className="listIcon" src={windIcon} />
              <Navbar.Text className="text-dark  fw-bold">
                {data.getCityByName.weather.wind.speed}
              </Navbar.Text>
            </Nav>
            <Nav className="bg-light px-3 py-1 rounded">
              <Image variant="top" className="listIcon" src={humidity} />
              <Navbar.Text className="text-dark  fw-bold">
                {data.getCityByName.weather.clouds.humidity}
              </Navbar.Text>
            </Nav>
            <Nav>
              <Button
                className="bg-light text-dark"
                onClick={() => history.push("/details")}
              >
                Details
              </Button>
            </Nav>
          </Container>
        </Navbar>
      )}
    </div>
  );
}

export default WeatherCard;
