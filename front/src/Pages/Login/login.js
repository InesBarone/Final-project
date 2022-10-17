import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/button";
import "./login.css";

function Login({ i }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const logueado = false;
  let navigate = useNavigate();

  const loguearse = (mail, password) => {
    fetch(`http://localhost:3003/login`, {
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
        if (responseJSON.success) {
          localStorage.setItem("auth-token", responseJSON.auth_token);
          navigate("/principal");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-login">
      <div className="login-box">
        <img className="avatar" src="/Images/ball.png" alt="pokeball" />
        <h1>Login here</h1>
        <form>
          <label for="email">Mail</label>
          <input
            type="email"
            placeholder="Enter e-mail"
            onChange={(e) => {
              setMail(e.target.value);
            }}
          ></input>

          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>

          <input
            text="Log In"
            type="submit"
            value="Login"
            onClick={(e) => {
              e.preventDefault();
              loguearse(mail, password);
            }}
          />
          <p>If you dont have a user please create an account.</p>
          <div className="register-button">
            <Link to="/register">
              <Button text="REGISTER" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
