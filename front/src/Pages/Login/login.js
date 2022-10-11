import { Link } from "react-router-dom";
import "./login.css";

function Login() {
    return ( 

<div className="container-login"> 
    <div className="login-box">
        <img className="avatar" src="/Images/ball.png" alt="pokeball"/>
        <h1>LOGIN</h1>
        <form>
            <label for="email">Mail</label>
            <input type="email" placeholder="Enter e-mail"></input>

            <label for="password">Password</label>
            <input type="password" placeholder="Enter Password"></input>

            <Link to="/principal"> 
            <input type="submit" value="Log In"></input>
            </Link>
        </form>
    </div>
</div>
)
}

export default Login;