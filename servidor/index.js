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
const auth = require("./controllers/auth");
const { validateJWT } = require("./middlewares/jwt");
app.use(auth);

//ENDPOINTS
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/pokemones", validateJWT, pokemones.allPokemones);
app.get("/pokemones/:id", validateJWT, pokemones.onePokemon);
app.post("/formulario", pokemones.createPokemon);
app.get("/pokemones/share/:id", pokemones.sharePokemon);

app.listen(3003, () => {
  console.log("Escuchando puerto 3003");
});
