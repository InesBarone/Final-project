const router = require("express").Router();

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

const bcrypt = require("bcrypt");
const { SECRET } = require("../middlewares/jwt");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const pwd = bcrypt.hashSync(req.body.password, salt);

  const userMail = req.body.mail;
  const userPassword = req.body.password;

  if (userMail.length < 1 || userMail === null) {
    res.status(400).json({ msg: "mail is required" });
    next();
  } else if (userPassword.length < 1 || userPassword === null) {
    res.status(400).json({ msg: "password is required" });
    next();
  } else if (
    (userMail.length < 1 || userMail === null) &&
    (userPassword.length < 1 || userPassword === null)
  ) {
    res.status(400).json({ msg: "name and password is required" });
    next();
  } else {
    knex
      .select("users_id", "mail", "password")
      .from("users")
      .where("mail", req.body.mail)
      .then((filas) => {
        if (filas.length === 1) {
          res.status(400).json({ msg: "There is a user with this email" });
          next();
        } else {
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
        }
      });
  }
});

router.post("/login", (req, res, next) => {
  const userMail = req.body.mail;
  const userPassword = req.body.password;

  if (userMail.length < 1 || userMail === null) {
    res.status(400).json({ msg: "name is required" });
    next();
  } else if (userPassword.length < 1 || userPassword === null) {
    res.status(400).json({ msg: "password is required" });
    next();
  } else if (
    (userMail.length < 1 || userMail === null) &&
    (userPassword.length < 1 || userPassword === null)
  ) {
    res.status(400).json({ msg: "name and password is required" });
    next();
  } else {
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
  }
});

module.exports = router;
