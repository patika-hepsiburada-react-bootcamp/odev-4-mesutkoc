import cloud from "../weathericon/cloud.png";
import cloudy from "../weathericon/cloudy.png";
import rain from "../weathericon/rainnew.png";
import rainyday from "../weathericon/rainy-day.png";
import snowicon from "../weathericon/snowicon.png";
import night from "../weathericon/night.png";
import sunny from "../weathericon/sunny.png";
import rains from "../weathericon/rain.png";
import cloudssunny from "../weathericon/cloudssunny.png";


const getIcon = (icon) => {
  if (icon === "01d") {
    return sunny;
  } else if (icon === "01n") {
    return night;
  } else if (icon === "02d") {
    return cloudy;
  } else if (icon === "02n") {
    return cloudy;
  } else if (icon === "03d" || icon === "03n") {
    return cloud;
  } else if (icon === "04d" || icon === "04n") {
    return rains;
  } else if (icon === "09d" || icon === "09n") {
    return rain;
  } else if (icon === "10d" || icon === "10n") {
    return rain;
  } else if (icon === "11d" || icon === "11n") {
    return rainyday;
  } else if (icon === "13d" || icon === "13n") {
    return snowicon;
  } else if (icon === "50d" || icon === "50n") {
    return cloudssunny;
  }
};

export default getIcon;

