import React from "react";
import "./pokecreation.css";
import { Link } from "react-router-dom";

export default function Pokecreation() {
    return (
        <div className="pokecreation-container">
            <div className="pokecreation-card">
                <Link to="/formulario">
                <div
                    className="id-card"
                    style={{
                    border: `1px solid black`,
                    borderBottom: "none",
                    borderRadius: "10px 10px 0 0",
                    }}>
                </div>
                <div
                    className="img-card-container"
                    style={{
                    borderLeft: `1px solid black`,
                    borderRight: `1px solid black`,
                    }}>
                    <img src="./Images/pokeinterrogation.png" className="img-card" alt="interrogation"/>
                </div>
                <div className="name-card"
                    style={{ backgroundColor:`black`}}>
                    <p>Add Pokemon</p>
                </div>
                </Link>
            </div>
        </div>
    );
}

