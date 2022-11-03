import React from "react";
import IconChanger from "./IconChanger";
import wind from "../assets/wind (1).svg";
import cloud from "../assets/cloud11.svg";
import onekiQir from "../assets/12qir.svg";

function Content({ data }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="top">
          <IconChanger data={data} />
          <div className="text">
            <div className="top-text">
              <h2>{data.current_observation.condition.temperature}</h2>
              <p>°</p>
            </div>

            <p className="text-p">Sunny</p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-item">
            <img src={wind} alt="Wind" />
            <p>{data.current_observation.wind.speed}km/h</p>
          </div>
          <div className="bottom-item">
            <img src={cloud} alt="cloud" />
            <p>{data.current_observation.atmosphere.humidity}%</p>
          </div>
          <div className="bottom-item">
            <img src={onekiQir} alt="onekiQir" />
            <p>{data.current_observation.astronomy.sunrise}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
