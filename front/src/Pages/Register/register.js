import React, { useState } from "react";
import "./register.css";

export default function Register() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  let inputs = document.getElementsByClassName("register__input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function () {
      if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fijar");
      } else {
        this.nextElementSibling.classList.remove("fijar");
      }
    });
  }

  const handleRegister = (mail, password) => {
    fetch(`http://localhost:3003/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        mail: mail,
        password: password,
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
  return (
    <div className="General">
       <img className="avatar" src="/Images/ball.png" alt="pokeball" />
      <form action="" class="register">
        <h1 class="register__titulo">POKE-REGISTER</h1>
        <p>Welcome to your Pokedex. </p>
        <p>Please register a new user</p>
        
        <input
          placeholder="Enter e-mail"
          type="mail"
          class="register__input"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
       
        <input
          placeholder="Enter password"
          type="password"
          class="register__input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="button"
          value="Send"
          class="register__submit"
          onClick={(e) => {
            handleRegister(mail, password);
          }}
        ></input>
      </form>
    </div>
  );
}
