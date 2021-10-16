import React from "react";
import TurkeyMap from "turkey-map-react";
import { useCityname } from "../contexts/CitynameContext";
import { useCity } from "../contexts/CityContext";

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
      <h4 className="text-center">{cityname}</h4>
      <TurkeyMap
        onHover={({ plateNumber, name }) =>
          turkishtoEnglish(name.toUpperCase())
        }
        onClick={({ plateNumber, name }) => setCity(cityname)}
        customStyle={{ idleColor: "#444", hoverColor: "#5bc0de" }}
      />
    </div>
  );
}

export default TurkeyApp;
