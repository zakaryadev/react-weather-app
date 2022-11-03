import React, { useEffect } from "react";
import sun from "../assets/sun.svg";
import cloud from "../assets/cloud.svg";
import moon from "../assets/moon1.svg";
import rain from "../assets/rain.svg";

function IconChanger(props) {
  const { data } = props;
  useEffect(() => {
    data && console.log("data keldi", data);
  }, []);

  switch (data.current_observation.condition.text.toLocaleLowerCase()) {
    case "sunny":
      return <img src={sun} alt="Sunny" />;
      console.log("AWA");
      break;
    case "cloudy":
      return <img src={cloud} alt="cloudlly" />;
      break;

    default:
      return <img src={sun} alt="Sunny" />;
      break;
  }
}

export default IconChanger;
