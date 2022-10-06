// EXPRESS

const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

//CORS
const cors = require("cors");
app.use(cors());

//CONTROLLERS
const pokemones = require("./controllers/pokemones");

//ENDPOINTS
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/pokemones", pokemones.allPokemones);
app.get("/pokemones/:name", pokemones.onePokemon);
app.post("/pokemones", pokemones.createPokemon);

app.listen(3003, () => {
  console.log("Escuchando puerto 3003");
});
