const express = require("express");
const app = express();

//KNEX

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Admin1234",
    database: "pokemones",
  },
});

exports.allPokemones = function (req, res, next) {
  knex
    .select("*")
    .from("pokemones")
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
  knex
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

exports.createPokemon = function (req, res, next) {
  knex("pokemones")
    .max("poke_number")
    .then((response) => {
      const number = response[0].max + 1;
      const name = req.body.name;
      const img = req.body.img;
      const weight = req.body.weight;
      const height = req.body.height;
      const description = req.body.description;
      const hp = req.body.hp;
      const atk = req.body.atk;
      const def = req.body.def;
      const satk = req.body.satk;
      const sdef = req.body.sdef;
      const spd = req.body.spd;
      const type_1 = req.body.type_1;
      const moves = req.body.moves;
      knex
        .insert({
          poke_number: number,
          name: name,
          img: img,
          weight: weight,
          height: height,
          description: description,
          hp: hp,
          atk: atk,
          def: def,
          satk: satk,
          sdef: sdef,
          spd: spd,
          type_1: type_1,
          moves: moves,
        })
        .into("pokemones")
        .then((response) => {
          res.status(200).json({ message: "se agrego" });
          console.log(number);
          next();
        })
        .catch((err) => {
          console.log(err);
          next();
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
