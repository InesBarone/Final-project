import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../Components/Button/button";
import Pokestats from "../../Components/Pokestats/Pokestats";
import Error from "../Error/Error";
import "./Pokebio.css";

export default function Pokebio() {
  const [pokemon, setPokemon] = useState([]);
  const [seeError, setSeeError] = useState(false);
  const [pokeinfo, setPokeinfo] = useState([]);
  const [link, setLink] = useState("");
  const [display, setDisplay] = useState("none");

  const params = useParams;
  const id = params().id;

  useEffect(() => {
    fetch(`http://localhost:3003/pokemones/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJSON) {
        setSeeError(false);
        setPokemon(responseJSON[0]);
      })
      .catch((err) => setSeeError(true));

    fetch("http://localhost:3003/pokemones", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJSON) {
        setPokeinfo(responseJSON);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const background = {
    backgroundColor: `${pokemon.type_colour_1}`,
  };

  const aboutColor = {
    color: `${pokemon.type_colour_1}`,
  };

  const index = pokeinfo.findIndex(
    (pokemon) => pokemon.pokemon_id === parseInt(id)
  );

  const changePokemonLeft = () => {
    if (!pokeinfo[0]) {
      return "0";
    }
    if (index === 0) {
      return `${pokeinfo[pokeinfo.length - 1].pokemon_id}`;
    } else {
      return `${pokeinfo[index - 1].pokemon_id}`;
    }
  };

  const changePokemonRight = () => {
    if (!pokeinfo[0]) {
      return "0";
    }
    if (index === pokeinfo.length - 1) {
      return `${pokeinfo[0].pokemon_id}`;
    } else {
      return `${pokeinfo[index + 1].pokemon_id}`;
    }
  };

  const handleSharePokemon = () => {
    fetch(`http://localhost:3003/pokemones/share/${pokemon.pokemon_id}`, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJSON) {
        console.log(responseJSON.link);
        setLink(responseJSON.link);
        setDisplay("flex");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-pokecomparte">
      <div className="Pokecomparte-container" style={background}>
        <div className="header-pokecomparte">
          <div className="name-pokecomparte-container">
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
        <Link to={`/pokemon/${changePokemonLeft()}`}>
          <button className="arrow-button2">{"<"}</button>
        </Link>
        <img
          src={pokemon.img}
          alt="Pokemon picture"
          className="pokePhoto-pokecomparte"
        />
        <Link to={`/pokemon/${changePokemonRight()}`}>
          <button className="arrow-button2" style={{ color: `` }}>
            {">"}
          </button>
        </Link>
      </div>
    </div>
  );
}
