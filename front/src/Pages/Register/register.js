import React from "react";
import "./register.css";


export default function Register() {
    let inputs = document.getElementsByClassName('register__input');
    for (let i=0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function(){
            if(this.value.length>=1) {
                this.nextElementSibling.classList.add('fijar');
                } else {
                    this.nextElementSibling.classList.remove('fijar');
                }
        });
    }   return (
    <div>
        <form action="" class="register">
            <h1 class="register__titulo">
            POKE-REGISTER 
            </h1>
            <p>Welcome to your Pokedex. Please register a new user</p>
            <input type="text" class="register__input"/>
            <label for="" 
            class="register__label">Mail</label>
            <input type="text" class="register__input"/>
            <label for="" 
            class="register__label">Password</label>
            <input type="button" value="Send" class="register__submit"></input>
        </form> 
    </div>
    )
}
        
