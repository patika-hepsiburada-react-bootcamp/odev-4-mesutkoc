import React from "react";
import TurkeyMap from "turkey-map-react";
import { useCityname } from "../contexts/CitynameContext";
import { useCity } from "../contexts/CityContext";

function TurkeyApp() {
  //use contexts to store cityname.
  const { cityname, setCityname } = useCityname();
  const { setCity } = useCity();

  //make uppercase city name and change turkish character.
  const turkishtoEnglish = (city) => {
    var cityname = city
      .replace(/Gümüşhane/gi, "GUMUSHANE")
      .replace(/Ş/, "S")
      .replace(/Ç/, "C")
      .replace(/Ğ/, "G")
      .replace(/Ü/, "U")
      .replace(/ü/, "U")
      .replace(/Â/, "A")
      .replace(/İ/, "I")
      .replace(/Ö/, "O");
    setCityname(cityname.toUpperCase());
  };
  const getCity = () => {
    setCity(cityname);
  };
  //TurkeyMap component installed with npm.
  return (
    <TurkeyMap
      onHover={({ plateNumber, name }) => turkishtoEnglish(name.toUpperCase())}
      onClick={({ plateNumber, name }) => getCity()}
      customStyle={{ idleColor: "#444", hoverColor: "#5bc0de" }}
    />
  );
}

export default TurkeyApp;
