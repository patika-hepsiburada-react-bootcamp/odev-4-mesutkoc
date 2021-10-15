import { createContext, useContext, useState } from "react";

const CityContext = createContext();
//this part creates, city context.
export const CityProvider = ({ children }) => {
  // create state for city.
  const [city, setCity] = useState("ISTANBUL");
  const values = {
    city,
    setCity,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity= () => useContext(CityContext);
