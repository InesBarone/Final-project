import React from "react";
import { Pokeinfo } from "../Pokeinfo/Pokeinfo";
import "./Pokecard.css";
import { Link } from "react-router-dom";

export default function Pokecard({ text, pokeinfo }) {
  let string = text;
  let regex = new RegExp(string, "gi");
  let filtered = pokeinfo.filter(function (pokemon) {
    return pokemon.name.match(regex);
  });

  return (
    <div className="pokecard-container">
      {filtered.map((pokemon) => {
        return (
          <div className="card" key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <div
                className="id-card"
                style={{
                  border: `1px solid ${pokemon.primaryColor}`,
                  borderBottom: "none",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                {pokemon.id}
              </div>
              <div
                className="img-card-container"
                style={{
                  borderLeft: `1px solid ${pokemon.primaryColor}`,
                  borderRight: `1px solid ${pokemon.primaryColor}`,
                }}
              >
                <img
                  src={pokemon.img}
                  className="img-card"
                  alt="pokemon-photo"
                />
              </div>
              <div
                className="name-card"
                style={{ backgroundColor: `${pokemon.primaryColor}` }}
              >
                {pokemon.name}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
