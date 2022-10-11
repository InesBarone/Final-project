import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Pages/Principal/Principal";
import Pokebio from "./Pages/Pokebio/Pokebio";
import { Pokeinfo } from "./Components/Pokeinfo/Pokeinfo";
import { useEffect, useState } from "react";
import Login from "./Pages/Login/login";
import Formulario from "./Pages/Formulario/formulario";
import Register from "./Pages/Register/register";

function App() {
  const [pokeinfo, setPokeinfo] = useState([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3003/pokemones", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJSON) {
        setPokeinfo(responseJSON);
      })
      .catch((err) => console.log(err));
  }, [i]);

  const token = localStorage.getItem("auth-token");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={token ? <Principal pokeinfo={pokeinfo} /> : <Login />}
          />
          <Route
            path="/pokemon/:id"
            element={<Pokebio pokeinfo={pokeinfo} setPokeinfo={setPokeinfo} />}
          />
          <Route path="/formulario" element={<Formulario/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
