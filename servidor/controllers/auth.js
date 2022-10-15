const router = require("express").Router();

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

const bcrypt = require("bcrypt");
const { SECRET } = require("../middlewares/jwt");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const pwd = bcrypt.hashSync(req.body.password, salt);

  if (req.body.mail.length === 0 || req.body.password.length === 0) {
    res.status(400).json({ msg: "falta mail o password" });
  }
  knex("users")
    .returning(["users_id", "mail"])
    .insert({
      mail: req.body.mail,
      password: pwd,
    })
    .then((respuesta) => {
      console.log(respuesta);
      res.status(201).json(respuesta[0]);
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("./404.js");
    });
});

router.post("/login", (req, res, next) => {
  knex
    .select("users_id", "mail", "password")
    .from("users")
    .where("mail", req.body.mail)
    .then((filas) => {
      if (filas.length === 1) {
        if (bcrypt.compareSync(req.body.password, filas[0].password)) {
          console.log("logueado");
          res.status(200).json({
            id: filas[0].users_id,
            success: true,
            msg: "logueado correctamente",
            auth_token: jwt.sign(
              {
                id: filas[0].users_id,
                mail: filas[0].mail,
                texto_random: "hola senpai",
              },
              SECRET
            ),
          });
        } else {
          res.status(404).json({ msg: "password incorrecto" });
        }
      } else {
        res.status(404).json({ msg: "mail incorrecto" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send;
      next();
    })
    .finally(() => {
      next();
    });
});

module.exports = router;
