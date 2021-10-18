import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Ballon from "../assets/Ballon.png";
import { GET_CITY_DETAIL_BY_ID } from "../Queries/idquerie";

// this conponent show city weather details.
function Details() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_CITY_DETAIL_BY_ID, {
    variables: { id: id },
  });
  // create current time.
  var today = new Date();
  var date =
    today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  var dateTime = date + " - " + time;
  const kelvinToCelsius = (actual) => (actual - 273.15).toFixed(2);
  //render error component
  if (error) {
    return <div>Error {error}</div>;
  }
  //render loading component
  if (loading) {
    return (
      <div className="text-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  //render detail component with no problem
  return (
    <div>
      {!loading && (
        <div className="row">
          <div className="card1 col-lg-6">
            <div className="px-3 mt-3 mb-3">
              <div className="d-flex flex-column">
                <h1>
                  {kelvinToCelsius(
                    data.getCityById[0].weather.temperature.actual
                  )}
                  &#176;
                </h1>
                <h2 className="mt-3 mb-0">{data.getCityById[0].name}</h2>
                <small>{dateTime}</small>
                {data.getCityById[0].weather.summary.title}
                <img className="w-50 mx-5" src={Ballon} alt="ballon" />
              </div>
            </div>
          </div>
          <div className="card2 col-lg-5">
            <h3 className="m-3 border text-center text-light rounded">
              Weather Details
            </h3>
            <div>
              <div className="px-3 text-center">
                <h4 className="text-light border-bottom ">Humidity</h4>
                <p className="px-3">
                  {data.getCityById[0].weather.clouds.humidity} %
                </p>
              </div>
              <div className="px-3 text-center">
                <h4 className="text-light border-bottom ">Wind</h4>
                <p className="px-3 ">
                  {data.getCityById[0].weather.wind.speed} km/h
                </p>
                <p className="px-3 ">
                  {data.getCityById[0].weather.wind.deg} deg
                </p>
              </div>
            </div>
            <div>
              <div className="px-3 text-center">
                <h4 className="text-light border-bottom ">Coord</h4>

                <p className="px-3">{data.getCityById[0].coord.lon} Lon</p>
                <p className="px-3">{data.getCityById[0].coord.lat} Lat</p>
              </div>
              <div className="px-3 text-center">
                <h4 className="text-light border-bottom ">Temprature</h4>
                <p className="px-3">
                  {kelvinToCelsius(
                    data.getCityById[0].weather.temperature.feelsLike
                  )}
                  &#176; Feels
                </p>
                <p className="px-3">
                  {kelvinToCelsius(data.getCityById[0].weather.temperature.max)}
                  &#176; Max
                </p>
                <p className="px-3">
                  {kelvinToCelsius(data.getCityById[0].weather.temperature.min)}
                  &#176; Min
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
