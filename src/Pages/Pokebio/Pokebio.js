import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Pokeinfo } from "../../Components/Pokeinfo/Pokeinfo";
import Pokestats from "../../Components/Pokestats/Pokestats";
import "./Pokebio.css";

export default function Pokebio({ pokeinfo, setPokeinfo }) {
  const params = useParams;

  const PokeName = params().name;

  const info = pokeinfo.filter((pokemon) => pokemon.name === PokeName);

  const background = {
    backgroundColor: `${info[0].primaryColor}`,
  };

  const aboutColor = {
    color: `${info[0].primaryColor}`,
  };

  let index = pokeinfo.indexOf(info[0]);
  const changePokemonLeft = () => {
    if (index === 0) {
      return `${pokeinfo[pokeinfo.length - 1].name}`;
    } else {
      return `${pokeinfo[index - 1].name}`;
    }
  };

  const changePokemonRight = () => {
    if (index === pokeinfo.length - 1) {
      return `${pokeinfo[0].name}`;
    } else {
      return `${pokeinfo[index + 1].name}`;
    }
  };

  return (
    <div>
      <div className="Pokebio-container" style={background}>
        <div className="header">
          <img src="/Images/Pokeball (1).png" className="img-pokebola" />
          <div className="arrow-name">
            <Link to="/">
              <img
                src="/Images/arrow-left-w.svg"
                className="arrow-left"
                alt="Arrow left"
              />
            </Link>
            <h1 className="name-pokemon">{info[0].name}</h1>
          </div>
          <div className="id">{info[0].id}</div>
        </div>
        <div className="pokePhoto-container">
          <Link to={`/pokemon/${changePokemonLeft()}`}>
            <button className="arrow-button2">{"<"}</button>
          </Link>
          <img src={info[0].img} alt="Pokemon picture" className="pokePhoto" />
          <Link to={`/pokemon/${changePokemonRight()}`}>
            <button className="arrow-button2" style={{ color: `` }}>
              {">"}
            </button>
          </Link>
        </div>
        <Pokestats
          info={[info[0]]}
          aboutColor={aboutColor}
          pokeinfo={pokeinfo}
        />
      </div>
    </div>
  );
}
