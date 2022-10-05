const express = require("express");
const app = express();

//KNEX

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "holaprog",
    database: "pokedata",
  },
});

exports.allPokemones = function (req, res, next) {
  knex
    .select("*")
    .from("pokemones")
    .orderBy("pokemon_id")
    .then((resultado) => {
      res.status(200).json(resultado);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.onePokemon = function (req, res, next) {
  const name = req.params.name;
  const r = knex
    .select("*")
    .from("pokemones")
    .where("name", "=", name)
    .then((response) => {
      res.status(200).json(response[0]);
      next();
    })
    .catch((err) => {
      next();
    });
};
