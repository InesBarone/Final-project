import React from "react";
import { Pokeinfo } from "../Pokeinfo/Pokeinfo";
import "./Pokecard.css";
import { Link } from "react-router-dom";
import Pokecreation from "../PokeCreation/pokecreation";

export default function Pokecard({ text, pokeinfo }) {
  let string = text;
  let regex = new RegExp(string, "gi");
  let filtered = pokeinfo.filter(function (pokemon) {
    return pokemon.name.match(regex);
  });

  return (
    <div className="pokecard-container">
      <div className="card pokecreation">
        <Link to={`/formulario`}>
          <div
            className="id-card"
            style={{
              border: `1px solid black`,
              borderBottom: "none",
              borderRadius: "10px 10px 0 0",
            }}
          ></div>
          <div
            className="img-card-container"
            style={{
              borderLeft: `1px solid black`,
              borderRight: `1px solid black`,
            }}
          >
            <img
              src="./Images/pokeinterrogation.png"
              className="img-card"
              alt="pokemon-photo"
            />
          </div>
          <div className="name-card" style={{ backgroundColor: `black` }}>
            {"Agregar pokemon"}
          </div>
        </Link>
      </div>
      {filtered.map((pokemon) => {
        return (
          <div className="card" key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.pokemon_id}`}>
              <div
                className="id-card"
                style={{
                  border: `1px solid ${pokemon.type_colour_1}`,
                  borderBottom: "none",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                {pokemon.pokemon_id}
              </div>
              <div
                className="img-card-container"
                style={{
                  borderLeft: `1px solid ${pokemon.type_colour_1}`,
                  borderRight: `1px solid ${pokemon.type_colour_1}`,
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
                style={{ backgroundColor: `${pokemon.type_colour_1}` }}
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
