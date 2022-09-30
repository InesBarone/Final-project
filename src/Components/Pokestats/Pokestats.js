import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { Link } from "react-router-dom";
import "./Pokestats.css";

export default function Pokestats({ info, aboutColor, pokeinfo }) {
  return (
    <div className="poke-stats">
      <div className="poke-type-container">
        {info[0].type.map((type, i) => {
          if (i == 0) {
            return (
              <div
                className="poke-type"
                style={{ backgroundColor: `${info[0].primaryColor}` }}
                key={type}
              >
                {type}
              </div>
            );
          } else {
            return (
              <div
                className="poke-type"
                style={{ backgroundColor: `${info[0].secondaryColor}` }}
                key={type}
              >
                {type}
              </div>
            );
          }
        })}
      </div>
      <div className="about-arrows">
        <h2 className="about" style={aboutColor}>
          About
        </h2>
      </div>
      <div className="poke-physics">
        <div className="physics-container">
          <div className="img-values">
            <img
              src="/Images/Weight.svg"
              alt="weight-pic"
              className="weight-pic"
            />
            <h3>{info[0].weight}</h3>
          </div>
          <h4>Weight</h4>
        </div>
        <div className="gray-line"></div>
        <div className="physics-container">
          <div className="img-values">
            <img
              src="/Images/Height.svg"
              alt="weight-pic"
              className="height-pic"
            />
            <h3>{info[0].height}</h3>
          </div>
          <h4>Height</h4>
        </div>
        <div className="gray-line"></div>
        <div className="physics-container">
          <div className="img-values">
            <h3>{info[0].moves}</h3>
          </div>
          <h4>Moves</h4>
        </div>
      </div>
      <p className="poke-description">{info[0].description}</p>
      <h2 className="base-stats" style={aboutColor}>
        Base Stats
      </h2>
      <div className="general-stats">
        <div className="stats-container">
          {info[0].stats.map((stat) => {
            return (
              <div className="base-stats-line" key={stat.name}>
                <div className="stat-name">
                  <h5 style={{ color: `${info[0].primaryColor}` }}>
                    {stat.name}
                  </h5>
                </div>
                <div className="vertical-line"></div>
                <div className="stat-value">
                  <p>{stat.value}</p>
                </div>
                <div className="stat-bar">
                  <ProgressBar
                    completed={parseInt(`${stat.value}`)}
                    min="0"
                    max="220"
                    customLabel=" "
                    bgColor={info[0].primaryColor}
                    className="bar"
                    height="5px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
