import { createContext, useContext, useState } from "react";

const CitynameContext = createContext();
//this part creates, city context.
export const CitynameProvider = ({ children }) => {
  // create state for city.
  const [cityname, setCityname] = useState();
  const values = {
    cityname,
    setCityname,
  };

  return <CitynameContext.Provider value={values}>{children}</CitynameContext.Provider>;
};

export const useCityname = () => useContext(CitynameContext);
