import React from "react";
import TurkeyMap from "turkey-map-react";
import { useCityname } from "../contexts/CitynameContext";
import { useCity } from "../contexts/CityContext";

// import { Button, Modal } from "react-bootstrap";

function TurkeyApp() {
  const { cityname,setCityname } = useCityname();
  const { setCity } = useCity();

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
  return (
    <div>
      {cityname}
      <TurkeyMap
        onHover={({ plateNumber, name }) =>
          turkishtoEnglish(name.toUpperCase())
        }
        onClick={({ plateNumber, name }) => setCity(cityname)}
        customStyle={{ idleColor: "#444", hoverColor: "blue" }}
      />
    </div>
  );
}

export default TurkeyApp;
