import React from "react";
import Pokecard from "../../Components/Pokecard/Pokecard";
import "./Principal.css";
import { useState, useEffect } from "react";
import { Pokeinfo } from "../../Components/Pokeinfo/Pokeinfo";

export default function Principal({ pokeinfo, setPokeinfo }) {
  // Este estado se corresponde con el texto ingresado en la barra de busqueda
  const [text, setText] = useState("");

  //order se refiere a un estado que alternará entre true y false para cambiar
  //el boton de orden segun id o segun abecedario
  const [order, setOrder] = useState(false);

  //arrows es un vector que contiene la ruta a las imágenes de flechas, la primera
  //hacia abajo, y la segunda hacia arriba
  let arrows = ["/Images/Arrow.svg", "/Images/Vector.png"];

  //imgArrows es un estado que alternará entre los dos valoresde arrows, y se mostrará
  //su valor en el botón de la flecha
  const [imgArrow, setImgArrow] = useState(arrows[0]);

  //manejarInput es el responsable de que text tenga el valor del valor ingresado en el input
  const manejarInput = (e) => {
    setText(e.target.value);
  };

  //manejarSortId se encarga de ordenar segun el ID, y al hacerle click, imgArrow es igual al valor inicial (flecha abajo)
  const manageSortId = (e) => {
    setOrder(false);
    setPokeinfo((previousState) => {
      let array = [...previousState];
      return array.sort((a, b) => a.number - b.number);
    });
    setImgArrow(arrows[0]);
  };

  //manejarSortId se encarga de ordenar segun el abecedario, y al hacerle click, imgArrow es igual al valor inicial (flecha abajo)
  const manageSortName = (e) => {
    setOrder(true);
    setPokeinfo((previousState) => {
      let array = [...previousState];
      function sortAlfabeto(x, y) {
        if (x.name < y.name) {
          return -1;
        }
        if (x.name > y.name) {
          return 1;
        }
        return 0;
      }
      return array.sort(sortAlfabeto);
    });
    setImgArrow(arrows[0]);
  };

  //reversePokeInfo se encarga de invertir el orden de los pokemones y que imgArrow alterne su valor
  const reversePokeInfo = () => {
    setPokeinfo((previousState) => {
      let array = [...previousState];
      return array.reverse();
    });
    if (imgArrow == arrows[0]) {
      setImgArrow(arrows[1]);
    } else {
      setImgArrow(arrows[0]);
    }
  };

  return (
    <div className="Principal-container">
      <header>
        <div className="header-1">
          <div className="logo-title">
            <img
              src="/Images/Pokeball.png"
              className="logo"
              alt="Logo pokebola"
            />
            <h1>Pokédex</h1>
          </div>
          {order ? (
            <div style={{ display: "flex" }}>
              <button className="arrow-button" onClick={manageSortId}>
                <div>
                  <p style={{ fontSize: "10px", marginRight: "3px" }}>A</p>
                  <p style={{ fontSize: "10px", marginRight: "3px" }}>Z</p>
                </div>
              </button>
              <button className="arrow-button" onClick={reversePokeInfo}>
                <img src={imgArrow} alt="arrow-button" className="arrow" />
              </button>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <button className="arrow-button" onClick={manageSortName}>
                <p>#</p>
              </button>
              <button className="arrow-button" onClick={reversePokeInfo}>
                <img src={imgArrow} alt="arrow-button" className="arrow" />
              </button>
            </div>
          )}
        </div>
        <input
          type="search"
          placeholder="🔎 Buscar"
          className="search-bar"
          onChange={manejarInput}
        />
      </header>
      <main>
        <Pokecard text={text} pokeinfo={pokeinfo} />
      </main>
    </div>
  );
}

//git checkout -b nombreDeBranch ---> crear una branch

//git fetch ---> actualizar todas las branches
// git checkout nombreDeBranch ---> entrar a la branch
