import { Link, useParams } from "react-router-dom";
import "./login.css";

function Login() {

<div className="login-box">
    <img className="avatar" src="/Images/ball.png" alt="pokeball"/>
    <h1>Login here</h1>
    <form>
        <label for="email">Mail</label>
        <input type="email" placeholder="Enter e-mail"></input>

        <label for="password">Password</label>
        <input type="text" placeholder="Enter Password"></input>

        <input type="submit" value="Log In"></input>
    </form>
</div>
}