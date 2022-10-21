import "./Error2.css";
import React from "react";
import Pokeball from "../../Components/Images/Pokeball.png";
import Button from "../../Components/Button/button";
import { Link } from "react-router-dom";

export default function Error400(){
  return(
     <div>
      <div class="a404">
      <h1 className="h1404">4</h1>
      <img className="img404" src={Pokeball} />
      <img className="img404" src={Pokeball} />
     </div>
     <div class="Notfound">
          
         <h2 className="h2404">Uh-Oh!</h2>
       <p className="p404">Not found</p>
       <Link to="/">
       <Button text="Go back Home ←"/>
       </Link>
     </div>
     </div>
  );
  }
