import React from "react";
import "./button.css";

export default function Button({ text, handleSharePokemon }) {
  return (
    <div className="button-green">
      <button
        onClick={(e) => {
          handleSharePokemon();
        }}
      >
        {text}
      </button>
    </div>
  );
}
