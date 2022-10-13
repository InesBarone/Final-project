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
  const [newType, setnewType] = useState("");

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
        <form className="type_form">
          Pokemon type
          <select onChange={(e) => setnewType(e.target.value)}>
            <option disabled>Select Pokemon type</option>
            <option value="1">Poison</option>
            <option value="2">Electric</option>
            <option value="3">Fire</option>
            <option value="4">Water</option>
            <option value="5">Flying</option>
            <option value="6">Ghost</option>
          </select>
          {console.log(newType)}
        </form>
        <input
          type="button"
          value="Send"
          className="formulario__submit"
        ></input>
      </form>
    </div>
  );
}
