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
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/principal" element={<Principal />}></Route>
          <Route path="/pokemon/:id" element={<Pokebio />} />
          <Route path="/formulario" element={<Formulario />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
