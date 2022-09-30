import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Pages/Principal/Principal";
import Pokebio from "./Pages/Pokebio/Pokebio";
import { Pokeinfo } from "./Components/Pokeinfo/Pokeinfo";
import { useState } from "react";

function App() {
  const [pokeinfo, setPokeinfo] = useState(
    Pokeinfo.sort((a, b) => a.number - b.number)
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Principal pokeinfo={pokeinfo} setPokeinfo={setPokeinfo} />
            }
          />
          <Route
            path="/pokemon/:name"
            element={<Pokebio pokeinfo={pokeinfo} setPokeinfo={setPokeinfo} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
