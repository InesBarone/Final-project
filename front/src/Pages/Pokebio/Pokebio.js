import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Pokeinfo } from "../../Components/Pokeinfo/Pokeinfo";
import Pokestats from "../../Components/Pokestats/Pokestats";
import "./Pokebio.css";

export default function Pokebio(pokeinfo) {
  const [pokeinfo2, setPokeinfo2] = useState([]);
  const [i, setI] = useState(0);

  const params = useParams;
  const id = params().id;
  console.log(pokeinfo2);
  useEffect(() => {
    fetch(`http://localhost:3003/pokemones/${id}`, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJSON) {
        setPokeinfo2(responseJSON[0]);
      })
      .catch((err) => console.log(err));
  }, [i]);

  const background = {
    backgroundColor: `${pokeinfo2.type_colour_1}`,
  };

  const aboutColor = {
    color: `${pokeinfo2.type_colour_1}`,
  };


  // let index = pokeinfo2.indexOf(pokeinfo2);
  // const changePokemonLeft = () => {
  //   if (index === 0) {
  //     return `${pokeinfo2[pokeinfo2.length - 1].name}`;
  //   } else {
  //     return `${pokeinfo2[index - 1].name}`;
  //   }
  // };

  // const changePokemonRight = () => {
  //   if (index === pokeinfo2.length - 1) {
  //     return `${pokeinfo2.name}`;
  //   } else {
  //     return `${pokeinfo2[index + 1].name}`;
  //   }
  // };

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
            <h1 className="name-pokemon">{pokeinfo2.name}</h1>
          </div>
          <div className="id">{pokeinfo2.pokemon_id}</div>
        </div>
        <div className="pokePhoto-container">
           <Link to={`/pokemon/${changePokemonLeft()}`}>
            <button className="arrow-button2">{"<"}</button>
          </Link> 
          <img
            src={pokeinfo2.img}
            alt="Pokemon picture"
            className="pokePhoto"
          />
          <Link to={`/pokemon/${changePokemonRight()}`}>
            <button className="arrow-button2" style={{ color: `` }}>
              {">"}
            </button>
          </Link> 
        </div>
        <Pokestats
          pokeinfo2={pokeinfo2}
          aboutColor={aboutColor}
          pokeinfo={pokeinfo}
        />
      </div>
    </div>
  );
}
