import React from "react";
import "./button.css";

export default function Button({ text, onclick }) {
  return (
    <div className="button-green">
      <button
        onClick={(e) => {
          onclick();
        }}
      >
        {text}
      </button>
    </div>
  );
}
