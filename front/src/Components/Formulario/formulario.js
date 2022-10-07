import React from "react";
import "./formulario.css";

export default function formulario() {
    return (
    <div>
        <form action="" className="formulario">
    <h1 className="formulario__titulo">
    Agregar Pokemon
    </h1>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">Name</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">Pokemon Image</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">Weight</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">Height</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">Description</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">HP</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">ATK</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">DEF</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">SATK</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">SDEF</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">SPD</label>
    <input type="text" className="formulario__input"/>
    <label for="" 
    className="formulario__label">Pokemon type</label>
    <input type="submit" className="formulario__submit"/>
</form>
    </div>
    );
} 