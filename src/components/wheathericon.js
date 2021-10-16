import cloud from "../assets/cloud.png";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rain.png";
import rainyday from "../assets/rainy-day.png";
import storm from "../assets/storm.png";

const getIcon = (icon) => {
  if (icon === "01d") {
    return cloud;
  } else if (icon === "01n") {
    return cloudy;
  } else if (icon === "02d") {
    return rain;
  } else if (icon === "02n") {
    return rainyday;
  } else if (icon === "03d" || icon === "03n") {
    return storm;
  } else if (icon === "04d" || icon === "04n") {
    return storm;
  }
};

export default getIcon;

