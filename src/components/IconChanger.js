import React from "react";
import sun from "../assets/sun.svg";
import cloud from "../assets/cloud.svg";
import clouds from "../assets/clouds.svg";
import moon from "../assets/moon1.svg";
import rain from "../assets/rain.svg";
import thunder from "../assets/thunderbolt.svg";
import moonStarts from "../assets/moon-starts.svg";
import Thunderstorms from "../assets/rain-thunderbolt.svg";
function IconChanger(props) {
  const { data } = props;

  switch (data.current_observation.condition.text.toLocaleLowerCase()) {
    case "sunny":
      return <img src={sun} alt="Sunny" />;
    case "moon":
      return <img src={moon} alt="cloudlly" />;
    case "cloudy":
      return <img src={cloud} alt="cloudlly" />;
    case "mostly sunny":
      return <img src={sun} alt="Clear" />;
    case "rain":
      return <img src={rain} alt="rain" />;
    case "thunder":
      return <img src={thunder} alt="thunder" />;
    case "mostly cloudy":
      return <img src={clouds} alt="clouds" />;

    case "showers":
      return <img src={rain} alt="showers" />;

    case "thunderstorms":
      return <img src={Thunderstorms} alt="Thunderstorms" />

    default:
      return <img src={sun} alt="Sunny" />;
  }
}

export default IconChanger;
