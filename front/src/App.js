import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Pages/Principal/Principal";
import Pokebio from "./Pages/Pokebio/Pokebio";
import { Pokeinfo } from "./Components/Pokeinfo/Pokeinfo";
import { useEffect, useState } from "react";
import Login from "./Pages/Login/login";
import Formulario from "./Pages/Formulario/formulario";
import Register from "./Pages/Register/register";
import Error404 from "./Pages/Error404/error404";
import Pokecomparte from "./Pages/Pokecomparte/Pokecomparte";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/principal" element={<Principal />}></Route>
          <Route path="/pokemon/:id" element={<Pokebio />} />
          <Route path="/formulario" element={<Formulario />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/error404" element={<Error404 />}></Route>
          <Route path="/pokemones/share/:id" element={<Pokecomparte />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
