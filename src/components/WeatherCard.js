import React from 'react'
import { useCityname } from "../contexts/CitynameContext";
import { useCity } from "../contexts/CityContext";
import { useQuery } from "@apollo/client";
import { WEATHER_QUERY } from "../Queries/queries";


function WeatherCard() {
    const { cityname } = useCityname();
    const { city } = useCity();

    const { loading, error, data } = useQuery(WEATHER_QUERY, {
      variables: { name: city },
    });

    return (
        <div style={{width:"10rem",float:"left",backgroundColor:"pink"}}>
            {cityname}
            <div>
                {!loading&&console.log(data)}
            </div>
        </div>
    )
}

export default WeatherCard
