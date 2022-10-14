import React from "react";
import "./button.css";

export default function Button({text}){
    return (
        <div className="button-green"> 
        <button>{text}</button>
        </div>
    )
} 