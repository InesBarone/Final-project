import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Pokestats from "../../Components/Pokestats/Pokestats";
import "./Pokecomparte.css";

export default function Pokecomparte() {
  const [pokemon, setPokemon] = useState([]);
  const params = useParams;
  const id = params().id;

  const background = {
    backgroundColor: `${pokemon.type_colour_1}`,
  };

  const aboutColor = {
    color: `${pokemon.type_colour_1}`,
  };

  useEffect(() => {
    fetch(`http://localhost:3003/pokemones/see/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJSON) {
        console.log(responseJSON);
        setPokemon(responseJSON);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-pokecomparte">
      <div className="Pokecomparte-container" style={background}>
        <div className="header-pokecomparte">
          <div className="name-pokecomparte-container">
            <h1 className="name-pokecomparte-int">
              Te han compartido al pokemon:
            </h1>
            <h1 className="name-pokecomparte">{pokemon.name}</h1>
          </div>
          <div className="id">{pokemon.id}</div>
        </div>
        <div className="main-container">
          <img
            src="/Images/Pokeball (1).png"
            className="img-pokebola-pokecomparte"
          />
          <div className="poke-stats-pokecomparte">
            <Pokestats pokeinfo2={pokemon} aboutColor={aboutColor} />
          </div>
        </div>
      </div>
      <div className="pokePhoto-container-pokecomparte">
        <img
          src={pokemon.img}
          alt="Pokemon picture"
          className="pokePhoto-pokecomparte"
        />
      </div>
    </div>
  );
}
