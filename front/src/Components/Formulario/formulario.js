import React from "react";
import "./formulario.css";

export default function formulario() {
    let inputs = document.getElementsByClassName('formulario__input');
    for (let i=0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function(){
            if(this.value.length>=1) {
                this.nextElementSibling.classList.add('fijar');
                } else {
                    this.nextElementSibling.classList.remove('fijar');
                }
        });
    }   
    return (
    <div>
        <div className="General2">
        <form action="" className="formulario">
            <h1 className="formulario__titulo">
            Agregar Pokemon
            </h1>
            <input type="text" placeholder="Name" className="formulario__input"/>
             
            <input type="text" placeholder="Pokemon Image" className="formulario__input"/>
          
            <input type="text" placeholder="Weight" className="formulario__input"/>
           
            <input type="text" placeholder="Height" className="formulario__input"/>
        
            <input type="text" placeholder="Description" className="formulario__input"/>
         
            <input type="text" placeholder="HP" className="formulario__input"/>
          
            <input type="text" placeholder="ATK" className="formulario__input"/>
          
            <input type="text" placeholder="DEF" className="formulario__input"/>
            
            <input type="text" placeholder="SATK" className="formulario__input"/>
           
            <input type="text" placeholder="SDEF" className="formulario__input"/>
            
            <input type="text" placeholder="SPD" className="formulario__input"/>
          
            <input type="text" placeholder="Pokemon type" className="formulario__input"/>
          
            <input type="submit" className="formulario__submit"/>
        </form>
        </div>
    </div>
    );
} 