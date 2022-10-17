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
  const userId = req.user_id;
  knex
    .raw(
      "select * from pokemones p join ( select id_type as id_type_1, type_name as type_name_1, type_colour as type_colour_1 from types_and_colours tac ) as t on p.type_1 = t.id_type_1 join ( select id_type as id_type_2, type_name as type_name_2, type_colour as type_colour_2 from types_and_colours tac ) as t2 on p.type_2 = t2.id_type_2 ;"
    )
    .then((resultado) => {
      res.status(200).json(resultado.rows);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.onePokemon = function (req, res, next) {
  const id = req.params.id;
  knex
    .raw(
      "select * from pokemones p join ( select id_type as id_type_1, type_name as type_name_1, type_colour as type_colour_1 from types_and_colours tac ) as t on p.type_1 = t.id_type_1 join ( select id_type as id_type_2, type_name as type_name_2, type_colour as type_colour_2 from types_and_colours tac ) as t2 on p.type_2 = t2.id_type_2 where '" +
        id +
        "' = p.pokemon_id ;"
    )
    .then((resultado) => {
      res.status(200).json(resultado.rows);
      next();
    })
    .catch((err) => {
      res.status(404).json({ msg: "no encontrado" });
    });
};

exports.createPokemon = function (req, res, next) {
  knex("pokemones")
    .max("poke_number")
    .then((response) => {
      const number = response[0].max + 1;
      let id = "";
      if (Math.floor(number / 10) === 0) {
        id = `#00${number}`;
      } else if (Math.floor(number / 100) === 0) {
        id = `#0${number}`;
      } else {
        id = `#${number}`;
      }

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
      const type_2 = req.body.type_2;
      const moves = req.body.moves;
      knex
        .insert({
          poke_number: number,
          id: id,
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
          type_2: type_2,
          moves: moves,
        })
        .into("pokemones")
        .then((response) => {
          res.status(200).json({ message: "se agrego" });
          console.log(number);
          console.log(Math.floor(number / 10));
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

exports.sharePokemon = function (req, res, next) {
  const id = req.body.id;
  res.status(200).json({ link: `http://localhost:3000/pokemones/share/${id}` });
  next();
};

exports.seePokemon = function (req, res, next) {};
