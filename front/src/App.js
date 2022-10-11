import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Pages/Principal/Principal";
import Pokebio from "./Pages/Pokebio/Pokebio";
import { Pokeinfo } from "./Components/Pokeinfo/Pokeinfo";
import { useEffect, useState } from "react";
import Login from "./Pages/Login/login";
import Formulario from "./Pages/Formulario/formulario";

function App() {
  const [pokeinfo, setPokeinfo] = useState([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3003/pokemones", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJSON) {
        setPokeinfo(responseJSON);
      })
      .catch((err) => console.log(err));
  }, [i]);
  console.log(pokeinfo);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
          path="/" 
          element={<Login />} />
          <Route
            path="/principal"
            element={<Principal pokeinfo={pokeinfo} />}
          ></Route>
          <Route
            path="/pokemon/:name"
            element={<Pokebio pokeinfo={pokeinfo} setPokeinfo={setPokeinfo} />}
          />
          <Route 
          path="/formulario" 
          element={<Formulario />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
