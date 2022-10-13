import React, { useState } from "react";
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
    <div>
      <form action="" className="formulario">
        <h1 className="formulario__titulo">Agregar Pokemon</h1>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewName(e.target.value)}
        />
        <label for="" className="formulario__label">
          Name
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewImg(e.target.value)}
        />
        <label for="" className="formulario__label">
          Pokemon Image
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewWeight(e.target.value)}
        />
        <label for="" className="formulario__label">
          Weight
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewHeight(e.target.value)}
        />
        <label for="" className="formulario__label">
          Height
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewDescription(e.target.value)}
        />
        <label for="" className="formulario__label">
          Description
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewHP(e.target.value)}
        />
        <label for="" className="formulario__label">
          HP
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewATK(e.target.value)}
        />
        <label for="" className="formulario__label">
          ATK
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewDEF(e.target.value)}
        />
        <label for="" className="formulario__label">
          DEF
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewSATK(e.target.value)}
        />
        <label for="" className="formulario__label">
          SATK
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewSDEF(e.target.value)}
        />
        <label for="" className="formulario__label">
          SDEF
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewSPD(e.target.value)}
        />
        <label for="" className="formulario__label">
          SPD
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setnewMoves(e.target.value)}
        />
        <label for="" className="formulario__label">
          Moves
        </label>
        <form className="type_form">
          Pokemon type
          <select onChange={(e) => setnewType(e.target.value)}>
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
