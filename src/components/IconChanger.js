import React from "react";
import sun from "../assets/sun.svg";
import cloud from "../assets/cloud.svg";
import clouds from "../assets/clouds.svg";
import moon from "../assets/moon1.svg";
import rain from "../assets/rain.svg";
import thunder from "../assets/thunderbolt.svg";
import moonStarts from "../assets/moon-starts.svg";

function IconChanger(props) {
  const { data } = props;

  switch (data.current_observation.condition.text.toLocaleLowerCase()) {
    case "sunny":
      return <img src={sun} alt="Sunny" />;
      break;
    case "moon":
      return <img src={moon} alt="cloudlly" />;
      break;
    case "cloudy":
      return <img src={cloud} alt="cloudlly" />;
      break;
    case "mostly sunny":
      return <img src={sun} alt="Clear" />;
      break;
    case "rain":
      return <img src={rain} alt="rain" />;
      break;
    case "thunder":
      return <img src={thunder} alt="thunder" />;
      break;
    case "mostly cloudy":
      return <img src={clouds} alt="clouds" />;
      break;
    case "showers":
      return <img src={rain} alt="showers" />;
      break;

    default:
      return <img src={sun} alt="Sunny" />;
      break;
  }
}

export default IconChanger;
