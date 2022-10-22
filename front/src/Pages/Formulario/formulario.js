import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./formulario.css";

export default function Formulario() {
  const [newName, setnewName] = useState("");
  const [newImg, setnewImg] = useState("");
  const [newWeight, setnewWeight] = useState("");
  const [newHeight, setnewHeight] = useState("");
  const [newDescription, setnewDescription] = useState("");
  const [newHP, setnewHP] = useState("");
  const [newATK, setnewATK] = useState("");
  const [newDEF, setnewDEF] = useState("");
  const [newSATK, setnewSATK] = useState("");
  const [newSDEF, setnewSDEF] = useState("");
  const [newSPD, setnewSPD] = useState("");
  const [newMoves, setnewMoves] = useState("");
  const [newType, setnewType] = useState("");

  const handleCreate = () => {
    fetch(`http://localhost:3003/formulario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: newName,
        img: newImg,
        weight: newWeight,
        height: newHeight,
        description: newDescription,
        hp: newHP,
        atk: newATK,
        def: newDEF,
        satk: newSATK,
        sdef: newSDEF,
        spd: newSPD,
        type_1: parseInt(newType),
        type_2: 0,
        moves: newMoves,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then(function (responseJSON) {
        console.log(responseJSON);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let inputs = document.getElementsByClassName("formulario__input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function () {
      if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fijar");
      } else {
        this.nextElementSibling.classList.remove("fijar");
      }
    });
  }
  return (
    <div className="General3">
      <form action="" className="formulario">
      <Link to="/principal">
              <img
                src="/Images/arrow-left-w.svg"
                className="arrow-left"
                alt="Arrow left"
              />
            </Link>
        <h1 className="formulario__titulo">Agregar Pokemon</h1>

        <input
          placeholder="Name"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewName(e.target.value)}
        />

        <input
          placeholder="Pokemon Image"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewImg(e.target.value)}
        />

        <input
          placeholder="Weight"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewWeight(e.target.value)}
        />

        <input
          placeholder="Height"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewHeight(e.target.value)}
        />

        <input
          placeholder="Description"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewDescription(e.target.value)}
        />

        <input
          placeholder="HP"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewHP(e.target.value)}
        />

        <input
          placeholder="ATK"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewATK(e.target.value)}
        />

        <input
          placeholder="DEF"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewDEF(e.target.value)}
        />

        <input
          placeholder="SATK"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewSATK(e.target.value)}
        />

        <input
          placeholder="SDEF"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewSDEF(e.target.value)}
        />

        <input
          placeholder="SPD"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewSPD(e.target.value)}
        />

        <input
          placeholder="Moves"
          type="text"
          className="formulario__input"
          onChange={(e) => setnewMoves(e.target.value)}
        />
         <h3 className="H3Type">POKEMON TYPE</h3>

        <form className="type_form">
           <select className="Selectformulario" onChange={(e) => setnewType(e.target.value)}>
            <option disabled>Select Pokemon type</option>
            <option value="2">Poison</option>
            <option value="12">Electric</option>
            <option value="5">Fire</option>
            <option value="6">Water</option>
            <option value="4">Flying</option>
            <option value="10">Ghost</option>
          </select>
        </form>

        <input
          type="button"
          value="Send"
          className="formulario__submit"
          onClick={(e) => {
            handleCreate();
          }}
        ></input>
      </form>
    </div>
  );
}
